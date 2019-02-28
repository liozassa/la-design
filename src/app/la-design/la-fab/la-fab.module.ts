import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaFabComponent } from './la-fab.component';

@NgModule({
  declarations: [
    LaFabComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [LaFabComponent],
  providers: [LaFabComponent]
})
export class LaFabModule { }
