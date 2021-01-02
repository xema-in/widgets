import { Component, Input, OnInit } from '@angular/core';
import { ServerConnection } from 'jema';
import { QueueUpdate } from 'jema/lib/_interfaces/queue-update';

@Component({
  selector: 'xe-queue-monitor-panel',
  templateUrl: './queue-monitor-panel.component.html',
  styleUrls: ['./queue-monitor-panel.component.scss']
})
export class QueueMonitorPanelComponent implements OnInit {
  @Input() serverConnection: ServerConnection;
  queueUpdates: Array<QueueUpdate> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueUpdates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
    });
  }

}
