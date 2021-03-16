import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { TimeagoClock, TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CustomFormatter } from '../code/custom-formatter';
import { CustomClock } from '../code/custom-clock';

import { QueueMonitorCardsPanelModule } from 'projects/queue-monitor-cards-panel/src/public-api';
import { QueueMonitorPanelModule } from 'projects/queue-monitor-panel/src/public-api';
import { QueueMonitorTablePanelModule } from 'projects/queue-monitor-table-panel/src/public-api';
import { TeamMonitorTablePanelModule } from 'projects/team-monitor-table-panel/src/public-api';
import { TeamMonitorPanelModule } from 'projects/team-monitor-panel/src/public-api';
import { DialerMonitorTablePanelModule } from 'projects/dialer-monitor-table-panel/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    }),
    QueueMonitorCardsPanelModule,
    QueueMonitorPanelModule,
    QueueMonitorTablePanelModule,
    TeamMonitorTablePanelModule,
    TeamMonitorPanelModule,
    DialerMonitorTablePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
