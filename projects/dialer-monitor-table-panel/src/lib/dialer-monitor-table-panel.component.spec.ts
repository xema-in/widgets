import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialerMonitorTablePanelComponent } from './dialer-monitor-table-panel.component';

describe('DialerMonitorTablePanelComponent', () => {
  let component: DialerMonitorTablePanelComponent;
  let fixture: ComponentFixture<DialerMonitorTablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialerMonitorTablePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialerMonitorTablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
