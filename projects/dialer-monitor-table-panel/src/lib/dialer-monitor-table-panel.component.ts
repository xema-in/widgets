import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServerConnection } from 'jema';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'xe-dialer-monitor-table-panel',
  templateUrl: './dialer-monitor-table-panel.component.html',
  styleUrls: ['./dialer-monitor-table-panel.component.scss'],
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
