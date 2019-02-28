import { Component, OnInit, Input } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'la-sidenav-tab',
  templateUrl: './la-sidenav-tab.component.html',
  styleUrls: ['./la-sidenav-tab.component.scss']
})
export class LaSidenavTabComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;
  @Input() href: string;
  @Input() iconMark: string; // Show if clicked.
  @Input() status: boolean;

  constructor(private router: Router) {}

  // Init of sidenavTab.
  ngOnInit() {
    this.status = false;
  }

  goTo(link: string) {
    this.router.navigate(['/' + link]);
  }

}
