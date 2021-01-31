import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelModule } from 'queue-monitor-panel';
import { TeamMonitorPanelModule } from 'team-monitor-panel';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamMonitorTablePanelModule } from 'team-monitor-table-panel';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QueueMonitorPanelModule,
    TeamMonitorPanelModule,
    BrowserAnimationsModule,
    TeamMonitorTablePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
