import { NgModule } from '@angular/core';
import { QueueMonitorCardsPanelComponent } from './queue-monitor-cards-panel.component';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [QueueMonitorCardsPanelComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    TimeagoModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [QueueMonitorCardsPanelComponent],
})
export class QueueMonitorCardsPanelModule { }
