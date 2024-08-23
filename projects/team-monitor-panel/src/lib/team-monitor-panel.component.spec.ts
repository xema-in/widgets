import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMonitorPanelComponent } from './team-monitor-panel.component';

describe('TeamMonitorPanelComponent', () => {
  let component: TeamMonitorPanelComponent;
  let fixture: ComponentFixture<TeamMonitorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMonitorPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMonitorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
