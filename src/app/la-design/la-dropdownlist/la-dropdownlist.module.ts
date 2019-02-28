import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaDropdownlistComponent } from './la-dropdownlist.component';
import { FormsModule } from '@angular/forms';
import { LaDropdownlistItem } from './la-dropdownlist-item';

@NgModule({
  declarations: [
    LaDropdownlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LaDropdownlistComponent],
  providers: [LaDropdownlistComponent, LaDropdownlistItem]
})
export class LaDropdownlistModule { }
