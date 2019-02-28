import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';
import { LaDropdownlistItem } from './la-dropdownlist-item';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'la-dropdownlist',
  templateUrl: './la-dropdownlist.component.html',
  styleUrls: ['./la-dropdownlist.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaDropdownlistComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaDropdownlistComponent),
      multi: true
    }
  ],
  animations: [
    trigger('ddlopen', [
      state('small', style({ height: '0px'})),
      state('large', style({ height: '100px'})),
      transition('small <=> large', animate('400ms ease-in'))
    ])
  ]
})
export class LaDropdownlistComponent implements ControlValueAccessor, Validator, OnInit {


  @Input() data: LaDropdownlistItem[];

  @Input() title: string = 'Select Gender';

  @Input()
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  private _value: string;

  state: string = 'small';

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {}

  ngOnInit(): void {
    this.selecteItem(this.value);
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void;

  openDdl(event) {
    this.animateMe();
  }

  selecteItem(value: string) {
    this.value = value;
    const item = this.data.find(i => i.value === this.value);
    if (item) {
      this.title = item.name;
    }
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  validate() {
    if (!this.value) {
      return {
        'required': 'Please chose a option.'
      };
    }

    return null;
  }
}
