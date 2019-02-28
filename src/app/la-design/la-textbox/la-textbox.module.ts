import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaTextboxComponent } from './la-textbox.component';

@NgModule({
  declarations: [
    LaTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LaTextboxComponent],
  providers: [LaTextboxComponent]
})
export class LaTextboxModule { }
