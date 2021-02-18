import { Component, Input, OnInit } from '@angular/core';
import { ServerConnection } from 'jema';
import { QueueState } from 'jema/lib/_interfaces/queue-state';

@Component({
  selector: 'xe-queue-monitor-panel',
  templateUrl: './queue-monitor-panel.component.html',
  styleUrls: ['./queue-monitor-panel.component.scss'],
})
export class QueueMonitorPanelComponent implements OnInit {
  @Input() serverConnection: ServerConnection;
  queueUpdates: Array<QueueState> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueStates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
    });
  }
}
