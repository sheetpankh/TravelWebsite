import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookinghistoryComponent } from './flightbookinghistory.component';

describe('FlightbookinghistoryComponent', () => {
  let component: FlightbookinghistoryComponent;
  let fixture: ComponentFixture<FlightbookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightbookinghistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightbookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
