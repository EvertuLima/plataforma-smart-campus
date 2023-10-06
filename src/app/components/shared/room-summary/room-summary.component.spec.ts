import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSummaryComponent } from './room-summary.component';

describe('RoomSummaryComponent', () => {
  let component: RoomSummaryComponent;
  let fixture: ComponentFixture<RoomSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomSummaryComponent]
    });
    fixture = TestBed.createComponent(RoomSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
