import { Component, OnInit, Input } from '@angular/core';
import { ServerConnection } from 'jema';
import { QueueState } from 'jema/lib/_interfaces/queue-state';

@Component({
  selector: 'xe-queue-monitor-cards-panel',
  templateUrl: './queue-monitor-cards-panel.component.html',
  styleUrls: ['./queue-monitor-cards-panel.component.scss'],
})
export class QueueMonitorCardsPanelComponent implements OnInit {
  @Input() serverConnection: ServerConnection;
  queueUpdates: Array<QueueState> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueStates.subscribe((queueUpdates) => {
      console.log(queueUpdates);
      this.queueUpdates = queueUpdates;
    });
  }
}
