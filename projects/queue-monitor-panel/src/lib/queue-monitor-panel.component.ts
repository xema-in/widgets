import { Component, Input, OnInit } from '@angular/core';
import { ServerConnection } from 'jema';
import { QueueUpdate } from 'jema/lib/_interfaces/queue-update';

@Component({
  selector: 'xe-queue-monitor-panel',
  template: `
    <div class="row">
      <div class="col-sm-2" *ngFor="let queueUpdate of queueUpdates">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{queueUpdate.size}}</h5>
            <p class="card-text">{{queueUpdate.queue}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class QueueMonitorPanelComponent implements OnInit {
  @Input() serverConnection: ServerConnection;
  queueUpdates: Array<QueueUpdate> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueUpdates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
      console.log('hello');
    });

  }

}
