import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LaTextboxModule } from './la-design/la-textbox/la-textbox.module';
import { LaTableModule } from './la-design/la-table/la-table.module';
import { LaFabModule } from './la-design/la-fab/la-fab.module';
import { LaSidenavModule } from './la-design/la-sidenav/la-sidenav.module';
import { LaDatepickerModule } from './la-design/la-datepicker/la-datepicker.module';
import { LaCalendarModule } from './la-design/la-calendar/la-calendar.module';
import { LaDropdownlistModule } from './la-design/la-dropdownlist/la-dropdownlist.module';
import { LaSwitchButtonModule } from './la-design/la-switch-button/la-switch-button.module';
import { ClickOutsideDirective } from './la-design/directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LaTextboxModule,
    LaTableModule,
    LaFabModule,
    LaSidenavModule,
    LaDatepickerModule,
    LaCalendarModule,
    LaDropdownlistModule,
    LaSwitchButtonModule
  ]
})
export class AppModule { }
