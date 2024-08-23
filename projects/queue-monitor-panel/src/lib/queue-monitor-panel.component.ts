import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ServerConnection } from 'jema';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'xe-queue-monitor-panel',
  standalone: true,
  imports: [
    CommonModule,
    TimeagoModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  templateUrl: './queue-monitor-panel.component.html',
  styleUrl: './queue-monitor-panel.component.scss',
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
