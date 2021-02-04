import { TestBed } from '@angular/core/testing';

import { QueueMonitorCardsPanelService } from './queue-monitor-cards-panel.service';

describe('QueueMonitorCardsPanelService', () => {
  let service: QueueMonitorCardsPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueMonitorCardsPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
