import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'xe-team-monitor-table-panel',
  templateUrl: './team-monitor-table-panel.component.html',
  styleUrls: ['./team-monitor-table-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamMonitorTablePanelComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;
  @Input() teamLead: boolean;

  dataSource: any;
  displayedColumns = [
    'agentId',
    'name',
    'phoneId',
    'agentStatus',
    'callerId',
    'taskTimestamp',
    'queueName',
    'breakTimestamp',
    'breakReason',
    'actions',
  ];
  @Input() serverConnection: ServerConnection;

  teamMemberStates: Array<TeamMemberState> = [];
  login = 0;
  talking = 0;
  wrapUp = 0;
  ready = 0;
  offline = 0;
  break = 0;

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.teamMemberStates.subscribe((data) => {
      this.teamMemberStates = data;

      this.login = this.teamMemberStates.filter((x) => x.connected === true).length;
      this.break = this.teamMemberStates.filter(
        (x) => x.agentStatus === 'NoPhone' || x.agentStatus === 'NotReady' || x.agentStatus === 'InBreak').length;
      this.ready = this.teamMemberStates.filter((x) => x.agentStatus === 'Idle').length;
      this.talking = this.teamMemberStates.filter((x) => x.agentSubStatus === 'Working').length;
      this.wrapUp = this.teamMemberStates.filter((x) => x.agentSubStatus === 'Closing').length;
      this.offline = this.teamMemberStates.filter((x) => x.agentStatus === 'Offline').length;

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');
    /* save to file */
    XLSX.writeFile(wb, 'AgentsStatus_' + now + '.xlsx');
  }

  barge(targetdeviceid) {
    this.serverConnection.barge(targetdeviceid);
  }

  whisper(targetdeviceid) {
    this.serverConnection.whisper(targetdeviceid);
  }

  spy(targetdeviceid) {
    this.serverConnection.spy(targetdeviceid);
  }

  getAht(hms, aht) {
    let seconds = this.ConvertToSeconds(hms);
    if (aht != null && seconds >= aht) {
      return 'danger';
    }
    else {
      return 'secondary';
    }
  }

  ConvertToSeconds(hms) {
    let a = hms.trim();
    let tt = a.split(' ');
    let seconds = 0;
    tt.forEach(t => {
      switch (t.slice(-1)) {
        case 's':
          seconds += +t.substring(0, t.length - 1);
          break;
        case 'm':
          seconds += (+t.substring(0, t.length - 1)) * 60;
          break;
        case 'h':
          seconds += (+t.substring(0, t.length - 1)) * 60 * 60;
          break;
        default:
          break;
      }
    });
    return seconds;
  }

}
