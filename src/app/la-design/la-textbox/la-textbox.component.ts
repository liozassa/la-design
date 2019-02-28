import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-textbox',
  templateUrl: './la-textbox.component.html',
  styleUrls: ['./la-textbox.component.scss']
})
export class LaTextboxComponent implements OnInit {

  @Input() type: string;

  input_type: string;

  constructor() { }

  ngOnInit() {
    this.setType();
  }

  setType() {
    switch (this.type) {
      case 'number':
      case 'text':
        this.input_type = this.type;
        break;

      default:
        this.input_type = 'text';
        break;
    }
  }

}
