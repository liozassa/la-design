import { Component, OnInit, Input } from '@angular/core';
import { Tab } from './tab.model';

@Component({
  selector: 'la-sidenav',
  templateUrl: './la-sidenav.component.html',
  styleUrls: ['./la-sidenav.component.scss']
})
export class LaSidenavComponent implements OnInit {

  @Input() tabs: Tab[];

  sidenavStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  getUrl(view: string) {
    return view;
  }

}
