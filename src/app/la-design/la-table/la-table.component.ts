import { Component, OnInit, Input } from '@angular/core';

interface ColumnDate {
  name: string;
  property: string;
  type: string;
  width: number; // Percentage.
  header_align: string; // Deriction or grid, default by rtl.
  cell_align: string; // Deriction or grid, default by rtl.
}

@Component({
  selector: 'la-table',
  templateUrl: './la-table.component.html',
  styleUrls: ['./la-table.component.scss']
})

export class LaTableComponent implements OnInit {

  @Input() rtl: boolean; // Direction or grid, default false.
  @Input() comboColumn: boolean; // Show checkbox column, default false.
  @Input() columns: ColumnDate[];
  @Input() data: any[];
  @Input() name: string;

  selectedRow: number;

  constructor() {
    this.rtl = false;
    this.comboColumn = false;
    this.columns = [];
    this.data = [];
  }

  ngOnInit() {
  }

  /*
   * Select row on click.
   * Clear select if second click on same row.
   */
  selectRow(index: number) {
    this.selectedRow = this.selectedRow === index ? -1 : index;
  }

  getDirection(): string {
    return this.rtl ? 'rtl' : 'ltr';
  }

  getAlign() {
    return this.rtl ? 'right' : 'left';
  }

  getTextAlign(align: string) {
    switch (align) {
      case 'right':
        return 'right';
      case 'center':
        return 'center';
      case 'left':
        return 'left';
      default:
        return this.rtl ? 'right' : 'left';
    }
  }

  getWidth(width: number) {
    if (this.rtl) {
      return (width * 90) / 100;
    }
    return width;
  }

}
