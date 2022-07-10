import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ServerConnection } from 'jema';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { QueueState } from 'jema/lib/_interfaces/queue-state';

@Component({
  selector: 'xe-queue-monitor-table-panel',
  templateUrl: './queue-monitor-table-panel.component.html',
  styleUrls: ['./queue-monitor-table-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QueueMonitorTablePanelComponent implements OnInit {
  @Input() serverConnection!: ServerConnection;
  queueUpdates: Array<QueueState> = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('TABLE') table!: ElementRef;

  dataSource: any;
  displayedColumns = [
    'queue',
    'size',
    'agentsConnected',
    'maxWaitTimestamp',
    'callsEntered',
    'callsConnected',
  ];

  constructor() { }

  ngOnInit(): void {
    this.serverConnection.queueStates.subscribe((queueUpdates) => {
      this.queueUpdates = queueUpdates;
      this.dataSource = new MatTableDataSource(queueUpdates);
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
    XLSX.writeFile(wb, 'QueuesStatus_' + now + '.xlsx');
  }
}
