import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { TimeagoClock, TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CustomFormatter } from '../code/custom-formatter';
import { CustomClock } from '../code/custom-clock';

import { QueueMonitorPanelModule } from 'queue-monitor-panel';
import { TeamMonitorPanelModule } from 'team-monitor-panel';
import { TeamMonitorTablePanelModule } from 'team-monitor-table-panel';
import { QueueMonitorCardsPanelModule } from 'queue-monitor-cards-panel';
import { QueueMonitorTablePanelModule } from 'queue-monitor-table-panel';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    }),
    QueueMonitorPanelModule,
    TeamMonitorPanelModule,
    TeamMonitorTablePanelModule,
    QueueMonitorCardsPanelModule,
    QueueMonitorTablePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
