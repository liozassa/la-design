import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSidenavTabComponent } from './la-sidenav-tab.component';

describe('SidenavTabComponent', () => {
  let component: LaSidenavTabComponent;
  let fixture: ComponentFixture<LaSidenavTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSidenavTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSidenavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
