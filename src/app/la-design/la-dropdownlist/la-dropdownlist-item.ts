import { Injectable } from '@angular/core';

@Injectable()
export class LaDropdownlistItem {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}
