import { TestBed } from '@angular/core/testing';

import { DialerMonitorTablePanelService } from './dialer-monitor-table-panel.service';

describe('DialerMonitorTablePanelService', () => {
  let service: DialerMonitorTablePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialerMonitorTablePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
