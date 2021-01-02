import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeagoClock, TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CustomClock } from '../code/custom-clock';
import { CustomFormatter } from '../code/custom-formatter';
import { TeamMonitorPanelComponent } from './team-monitor-panel.component';


@NgModule({
  declarations: [TeamMonitorPanelComponent],
  imports: [
    CommonModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    })
  ],
  exports: [TeamMonitorPanelComponent]
})
export class TeamMonitorPanelModule { }
