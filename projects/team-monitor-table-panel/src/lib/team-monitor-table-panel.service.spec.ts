import { TestBed } from '@angular/core/testing';

import { TeamMonitorTablePanelService } from './team-monitor-table-panel.service';

describe('TeamMonitorTablePanelService', () => {
  let service: TeamMonitorTablePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMonitorTablePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
