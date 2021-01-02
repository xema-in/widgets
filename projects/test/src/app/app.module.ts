import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelModule } from 'queue-monitor-panel';
import { TeamMonitorPanelModule } from 'team-monitor-panel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QueueMonitorPanelModule,
    TeamMonitorPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
