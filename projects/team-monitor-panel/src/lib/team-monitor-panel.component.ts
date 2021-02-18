import { Component, Input, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'xe-team-monitor-panel',
  templateUrl: './team-monitor-panel.component.html',
  styleUrls: ['./team-monitor-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamMonitorPanelComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;

  dataSource: any;
  displayedColumns = [
    'Name',
    'Device',
    'State',
    'Status',
    'Duration',
    'QueueName',
  ];
  @Input() serverConnection: ServerConnection;
  teamMemberStates: Array<TeamMemberState> = [];
  total = 0;
  inCall = 0;
  wrapUp = 0;
  idle = 0;
  offline = 0;
  break = 0;

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.teamMemberStates.subscribe((data) => {
      this.teamMemberStates = data;

      this.total = this.teamMemberStates.filter((x) => x.connected === true).length;
      this.inCall = this.teamMemberStates.filter((x) => x.agentSubStatus === 'In Call').length;
      this.wrapUp = this.teamMemberStates.filter((x) => x.agentSubStatus === 'Wrap Up').length;
      this.idle = this.teamMemberStates.filter((x) => x.agentStatus === 'Ready').length;
      this.offline = this.teamMemberStates.filter((x) => x.agentStatus === 'Offline').length;
      this.break = this.teamMemberStates.filter((x) => x.agentStatus === 'In Break').length;

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
