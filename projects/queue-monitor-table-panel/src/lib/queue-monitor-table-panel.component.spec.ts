import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMonitorTablePanelComponent } from './queue-monitor-table-panel.component';

describe('QueueMonitorTablePanelComponent', () => {
  let component: QueueMonitorTablePanelComponent;
  let fixture: ComponentFixture<QueueMonitorTablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueMonitorTablePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMonitorTablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
