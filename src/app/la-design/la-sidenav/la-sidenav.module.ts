import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaSidenavComponent } from './la-sidenav.component';
import { LaSidenavTabComponent } from './la-sidenav-tab/la-sidenav-tab.component';

@NgModule({
  declarations: [
    LaSidenavTabComponent,
    LaSidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LaSidenavComponent],
  providers: [LaSidenavComponent]
})
export class LaSidenavModule { }
