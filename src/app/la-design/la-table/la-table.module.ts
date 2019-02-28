import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaTableComponent } from './la-table.component';

@NgModule({
  declarations: [
    LaTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LaTableComponent],
  providers: [LaTableComponent]
})
export class LaTableModule { }
