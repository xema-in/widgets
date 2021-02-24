import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TeamMonitorTablePanelComponent } from './team-monitor-table-panel.component';

@NgModule({
  declarations: [TeamMonitorTablePanelComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TimeagoModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  exports: [TeamMonitorTablePanelComponent],
})
export class TeamMonitorTablePanelModule { }
