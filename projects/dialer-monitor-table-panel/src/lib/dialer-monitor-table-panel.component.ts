import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerConnection } from 'jema';
import moment from 'moment';
import { TimeagoModule } from 'ngx-timeago';

import * as XLSX from 'xlsx';
@Component({
  selector: 'xe-dialer-monitor-table-panel',
  standalone: true,
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
  templateUrl: './dialer-monitor-table-panel.component.html',
  styleUrl: './dialer-monitor-table-panel.component.scss',
})
export class DialerMonitorTablePanelComponent implements OnInit, OnDestroy {
  @Input() serverConnection!: ServerConnection;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('TABLE') table!: ElementRef;

  dialerUpdateSubscription: any;
  dialerStates: any;

  dataSource: any;
  displayedColumns = [
    'name',
    'active',
    'speed',
    'activeQueue',
    'completed',
  ];

  constructor() { }

  ngOnDestroy(): void {
    this.dialerUpdateSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dialerUpdateSubscription = this.serverConnection.dialerStates.subscribe((dialerStates) => {
      this.dialerStates = dialerStates;
      this.dataSource = new MatTableDataSource(dialerStates);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');
    /* save to file */
    XLSX.writeFile(wb, 'DialersStatus_' + now + '.xlsx');
  }

}
