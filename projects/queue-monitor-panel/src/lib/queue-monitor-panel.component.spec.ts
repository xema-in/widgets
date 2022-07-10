import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMonitorPanelComponent } from './queue-monitor-panel.component';

describe('QueueMonitorPanelComponent', () => {
  let component: QueueMonitorPanelComponent;
  let fixture: ComponentFixture<QueueMonitorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueMonitorPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueMonitorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
