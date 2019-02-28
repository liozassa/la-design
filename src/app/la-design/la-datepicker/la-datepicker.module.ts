import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaDatepickerComponent } from './la-datepicker.component';
import { LaCalendarModule } from '../la-calendar/la-calendar.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    LaDatepickerComponent
  ],
  imports: [
    CommonModule,
    LaCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
     })
  ],
  exports: [LaDatepickerComponent],
  providers: [LaDatepickerComponent]
})
export class LaDatepickerModule { }
