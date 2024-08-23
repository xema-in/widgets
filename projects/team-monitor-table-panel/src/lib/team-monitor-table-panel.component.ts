import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';
import moment from 'moment';
import { TimeagoModule } from 'ngx-timeago';

import * as XLSX from 'xlsx';

@Component({
  selector: 'xe-team-monitor-table-panel',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    FlexLayoutModule,
    TimeagoModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './team-monitor-table-panel.component.html',
  styleUrl: './team-monitor-table-panel.component.scss'
})
export class TeamMonitorTablePanelComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('TABLE') table!: ElementRef;
  @Input() teamLead!: boolean;

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
  @Input() serverConnection!: ServerConnection;

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

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
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

  barge(targetdeviceid: any) {
    this.serverConnection.barge(targetdeviceid);
  }

  whisper(targetdeviceid: any) {
    this.serverConnection.whisper(targetdeviceid);
  }

  spy(targetdeviceid: any) {
    this.serverConnection.spy(targetdeviceid);
  }

  getAht(hms: any, aht: any) {
    let seconds = this.ConvertToSeconds(hms);
    if (aht != null && seconds >= aht) {
      return 'danger';
    }
    else {
      return 'secondary';
    }
  }

  ConvertToSeconds(hms: any) {
    let a = hms.trim();
    let tt = a.split(' ');
    let seconds = 0;
    tt.forEach((t: any) => {
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
