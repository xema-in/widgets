import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ServerConnection } from 'jema';
import { QueueState } from 'jema/lib/_interfaces/queue-state';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'xe-queue-monitor-cards-panel',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    TimeagoModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './queue-monitor-cards-panel.component.html',
  styleUrl: './queue-monitor-cards-panel.component.scss',
})
export class QueueMonitorCardsPanelComponent implements OnInit {
  @Input() serverConnection!: ServerConnection;
  queueUpdates: Array<QueueState> = [];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueStates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
    });
  }
}
