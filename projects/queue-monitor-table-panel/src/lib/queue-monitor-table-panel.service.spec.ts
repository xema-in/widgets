import { TestBed } from '@angular/core/testing';

import { QueueMonitorTablePanelService } from './queue-monitor-table-panel.service';

describe('QueueMonitorTablePanelService', () => {
  let service: QueueMonitorTablePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueMonitorTablePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
