import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';
import moment from 'moment';
import { TimeagoModule } from 'ngx-timeago';

import * as XLSX from 'xlsx';

@Component({
  selector: 'xe-team-monitor-panel',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    TimeagoModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  templateUrl: './team-monitor-panel.component.html',
  styleUrl: './team-monitor-panel.component.scss'
})
export class TeamMonitorPanelComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('TABLE') table!: ElementRef;

  @Input() serverConnection!: ServerConnection;

  dataSource: any;
  displayedColumns = ['name', 'phoneId', 'agentStatus', 'breakTimestamp', 'taskTimestamp', 'wrapUpTimestamp', 'queueName', 'callUniqueId'];

  teamMemberStates: Array<TeamMemberState> = [];
  total = 0;
  online = 0;
  inCall = 0;
  wrapUp = 0;
  idle = 0;
  break = 0;

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.teamMemberStates.subscribe((data) => {
      this.teamMemberStates = data;

      this.total = this.teamMemberStates.length;
      this.inCall = this.teamMemberStates.filter((x) => x.agentSubStatus === 'In Call').length;
      this.wrapUp = this.teamMemberStates.filter((x) => x.agentSubStatus === 'Wrap Up').length;
      this.idle = this.teamMemberStates.filter((x) => x.agentStatus === 'Ready').length;
      this.online = this.teamMemberStates.filter((x) => x.connected === true).length;
      this.break = this.teamMemberStates.filter((x) => x.agentStatus === 'In Break').length;

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();

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
