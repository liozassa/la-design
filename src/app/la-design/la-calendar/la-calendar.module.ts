import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaCalendarComponent } from './la-calendar.component';



@NgModule({
  declarations: [
    LaCalendarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [LaCalendarComponent],
  providers: [LaCalendarComponent]
})
export class LaCalendarModule { }
