import { Component, Input, OnInit } from '@angular/core';
import { ServerConnection } from 'jema';
import { TeamMemberState } from 'jema/lib/_interfaces/team-member-state';

@Component({
  selector: 'xe-team-monitor-panel',
  templateUrl: './team-monitor-panel.component.html',
  styleUrls: ['./team-monitor-panel.component.scss']
})
export class TeamMonitorPanelComponent implements OnInit {
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
      this.total = this.teamMemberStates.length;
      this.inCall = this.teamMemberStates.filter(x => x.deviceStatus === 'In Call').length;
      this.wrapUp = this.teamMemberStates.filter(x => x.agentStatus === 'Wrap Up').length;
      this.idle = this.teamMemberStates.filter(x => x.deviceStatus === 'Idle').length;
      this.offline = this.teamMemberStates.filter(x => x.deviceStatus === 'Offline').length;
      this.break = this.teamMemberStates.filter(x => x.agentStatus === 'In Break').length;
    });
  }

}
