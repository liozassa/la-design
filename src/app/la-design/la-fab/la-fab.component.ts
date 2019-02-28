import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-fab',
  templateUrl: './la-fab.component.html',
  styleUrls: ['./la-fab.component.scss']
})
export class LaFabComponent implements OnInit {

  @Input() rtl: boolean = false;
  @Input() type: string;
  @Input() diameter: number = 40;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  style: string;

  constructor() {
  }

  ngOnInit() {
  }

  fabClick() {
    this.onClick.emit(null);
  }

  buildStyle(): object {
    const float = this.rtl ? 'right' : 'left';
    return {
      height: + this.diameter + 'px',
      width: this.diameter + 'px',
      float: float
    };
  }
}
