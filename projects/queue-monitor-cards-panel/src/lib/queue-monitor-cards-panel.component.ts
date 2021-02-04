import { Component, OnInit, Input } from '@angular/core';
import { ServerConnection } from 'jema';
import { QueueUpdate } from 'jema/lib/_interfaces/queue-update';

@Component({
  selector: 'xe-queue-monitor-cards-panel',
  templateUrl: './queue-monitor-cards-panel.component.html',
  styleUrls: ['./queue-monitor-cards-panel.component.scss'],
})
export class QueueMonitorCardsPanelComponent implements OnInit {
  @Input() serverConnection: ServerConnection;
  queueUpdates: Array<QueueUpdate> = [];

  constructor() {}

  ngOnInit(): void {
    this.serverConnection.queueUpdates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
    });
  }
}
