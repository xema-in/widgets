import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMonitorCardsPanelComponent } from './queue-monitor-cards-panel.component';

describe('QueueMonitorCardsPanelComponent', () => {
  let component: QueueMonitorCardsPanelComponent;
  let fixture: ComponentFixture<QueueMonitorCardsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueMonitorCardsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueMonitorCardsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
