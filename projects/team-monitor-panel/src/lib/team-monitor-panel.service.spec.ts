import { TestBed } from '@angular/core/testing';

import { TeamMonitorPanelService } from './team-monitor-panel.service';

describe('TeamMonitorPanelService', () => {
  let service: TeamMonitorPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMonitorPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
