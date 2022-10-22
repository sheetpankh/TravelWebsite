import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { FlightbookinghistoryComponent } from './flightbookinghistory/flightbookinghistory.component';


@NgModule({
  declarations: [
    FlightbookingComponent,
    FlightbookinghistoryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
