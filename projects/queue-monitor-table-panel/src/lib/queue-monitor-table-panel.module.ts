import { NgModule } from '@angular/core';
import { QueueMonitorTablePanelComponent } from './queue-monitor-table-panel.component';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [QueueMonitorTablePanelComponent],
  imports: [
    CommonModule,
    TimeagoModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    TimeagoModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [QueueMonitorTablePanelComponent],
})
export class QueueMonitorTablePanelModule {}
