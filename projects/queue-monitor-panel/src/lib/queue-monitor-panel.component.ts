import { Component, Input, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { ServerConnection } from 'jema';
import { QueueState } from 'jema/lib/_interfaces/queue-state';
import { min } from 'moment';

@Component({
  selector: 'xe-queue-monitor-panel',
  templateUrl: './queue-monitor-panel.component.html',
  styleUrls: ['./queue-monitor-panel.component.scss'],
})
export class QueueMonitorPanelComponent implements OnInit {
  @Input() serverConnection!: ServerConnection;
  queueUpdates: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueStates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
      this.queueUpdates.forEach((value) => {
        if (value.maxWaitTimestamp != null && (new Date().getTime() - new Date(value.maxWaitTimestamp).getTime()) > 10000) value.show = true;
        else value.show = false;
      })
    });
  }

}
