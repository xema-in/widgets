import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMonitorTablePanelComponent } from './team-monitor-table-panel.component';

describe('TeamMonitorTablePanelComponent', () => {
  let component: TeamMonitorTablePanelComponent;
  let fixture: ComponentFixture<TeamMonitorTablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMonitorTablePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMonitorTablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
