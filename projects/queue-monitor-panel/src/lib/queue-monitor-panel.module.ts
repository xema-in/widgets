import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelComponent } from './queue-monitor-panel.component';
import { MatCardModule } from '@angular/material/card';
import { TimeagoModule } from 'ngx-timeago';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [QueueMonitorPanelComponent],
  imports: [
    CommonModule,
    TimeagoModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [QueueMonitorPanelComponent],
})
export class QueueMonitorPanelModule { }
