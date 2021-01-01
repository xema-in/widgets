import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QueueMonitorPanelComponent } from './queue-monitor-panel.component';



@NgModule({
  declarations: [QueueMonitorPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [QueueMonitorPanelComponent]
})
export class QueueMonitorPanelModule { }
