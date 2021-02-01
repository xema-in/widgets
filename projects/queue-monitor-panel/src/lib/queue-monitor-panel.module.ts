import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelComponent } from './queue-monitor-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [QueueMonitorPanelComponent],
  imports: [
    CommonModule,
    TimeagoModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [QueueMonitorPanelComponent],
})
export class QueueMonitorPanelModule { }
