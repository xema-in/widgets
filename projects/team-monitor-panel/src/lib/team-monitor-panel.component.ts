import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'xe-team-monitor-panel',
  templateUrl: './team-monitor-panel.component.html',
  styleUrls: ['./team-monitor-panel.component.scss'],
})
export class TeamMonitorPanelComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: any;
  displayedColumns = [
    'Name',
    'AgentId',
    'Device',
    'CallType',
    'CallDuration',
    'Caller',
    'Status',
    'Duration',
    'QueueName',
    'CallUniqueId',
  ];
  @Input() serverConnection: ServerConnection;
  teamMemberStates: Array<TeamMemberState> = [];
  total = 0;
  inCall = 0;
  wrapUp = 0;
  idle = 0;
  offline = 0;
  break = 0;

  constructor() {}

  ngOnInit(): void {
    this.serverConnection.teamMemberStates.subscribe((data) => {
      this.teamMemberStates = data;
      this.total = this.teamMemberStates.length;
      this.inCall = this.teamMemberStates.filter(
        (x) => x.deviceStatus === 'In Call'
      ).length;
      this.wrapUp = this.teamMemberStates.filter(
        (x) => x.agentStatus === 'Wrap Up'
      ).length;
      this.idle = this.teamMemberStates.filter(
        (x) => x.deviceStatus === 'Idle'
      ).length;
      this.offline = this.teamMemberStates.filter(
        (x) => x.deviceStatus === 'Offline'
      ).length;
      this.break = this.teamMemberStates.filter(
        (x) => x.agentStatus === 'In Break'
      ).length;

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
}
