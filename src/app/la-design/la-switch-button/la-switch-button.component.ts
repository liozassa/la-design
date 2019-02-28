import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'la-switch-button',
  templateUrl: './la-switch-button.component.html',
  styleUrls: ['./la-switch-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaSwitchButtonComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaSwitchButtonComponent),
      multi: true
    }
  ],
})

export class LaSwitchButtonComponent implements ControlValueAccessor, Validator, OnInit {

  @Input()
  get value(): boolean {
    console.log('LaSwitchButtonComponent - getvalue', this._value);
    return this._value;
  }

  set value(val: boolean) {
    console.log('LaSwitchButtonComponent - setvalue', val);
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  private _value: boolean = false;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {}

  ngOnInit(): void {
    console.log('LaSwitchButtonComponent - ngOnInit');
  }

  writeValue(value: boolean): void {
    console.log('LaSwitchButtonComponent - writeValue', value);
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void;

  validate() {
    if (!this.value) {
      return {
        'required': 'Please chose a option.'
      };
    }

    return null;
  }

  onValueChange() {
    this.value = !this.value;
  }

}
