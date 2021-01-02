import { TestBed } from '@angular/core/testing';

import { QueueMonitorPanelService } from './queue-monitor-panel.service';

describe('QueueMonitorPanelService', () => {
  let service: QueueMonitorPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueMonitorPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
