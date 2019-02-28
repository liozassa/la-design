import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaSwitchButtonComponent } from './la-switch-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LaSwitchButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LaSwitchButtonComponent],
  providers: [LaSwitchButtonComponent]
})
export class LaSwitchButtonModule { }
