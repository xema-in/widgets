import { NgModule } from '@angular/core';
import { TeamMonitorTablePanelComponent } from './team-monitor-table-panel.component';
import { CommonModule } from '@angular/common';
import { TimeagoModule, TimeagoFormatter, TimeagoClock } from 'ngx-timeago';
import { CustomClock } from '../code/custom-clock';
import { CustomFormatter } from '../code/custom-formatter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [TeamMonitorTablePanelComponent],
  imports: [
    CommonModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  exports: [TeamMonitorTablePanelComponent],
})
export class TeamMonitorTablePanelModule {}