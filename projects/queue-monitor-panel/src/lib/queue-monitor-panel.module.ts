import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelComponent } from './queue-monitor-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TimeagoModule, TimeagoFormatter, TimeagoClock } from 'ngx-timeago';
import { CustomClock } from '../code/custom-clock';
import { CustomFormatter } from '../code/custom-formatter';

@NgModule({
  declarations: [QueueMonitorPanelComponent],
  imports: [
    CommonModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    }),
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [QueueMonitorPanelComponent],
})
export class QueueMonitorPanelModule {}
