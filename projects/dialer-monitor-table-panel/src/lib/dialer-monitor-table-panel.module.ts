import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeagoModule } from 'ngx-timeago';
import { DialerMonitorTablePanelComponent } from './dialer-monitor-table-panel.component';



@NgModule({
  declarations: [DialerMonitorTablePanelComponent],
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
  exports: [DialerMonitorTablePanelComponent]
})
export class DialerMonitorTablePanelModule { }
