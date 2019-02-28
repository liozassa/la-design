import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'la-datepicker',
  templateUrl: './la-datepicker.component.html',
  styleUrls: ['./la-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaDatepickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaDatepickerComponent),
      multi: true
    }
  ],
})
export class LaDatepickerComponent implements OnInit, ControlValueAccessor {

  // @Input() date: moment.Moment;
  @Input() title: string;

  @Input()
  get value(): Date | null {
    console.log('LaDatepickerComponent - get value');
    return this._value.toDate();
  }
  set value(value: Date | null) {
    console.log('LaDatepickerComponent - set value');
    console.log('value', value);
    this._value = moment(value);
    // this.onSelectDate.emit(moment(value));
    this.onChange(value);
    this.onTouched();
  }
  private _value: moment.Moment | null;

  // @Output() onSelectDate = new EventEmitter<moment.Moment>();

  showCalendar: boolean;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {
    this.showCalendar = false;
  }

  ngOnInit() {
  }

  writeValue(value: Date): void {
    if (value) {
      this._value = moment(value);
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
