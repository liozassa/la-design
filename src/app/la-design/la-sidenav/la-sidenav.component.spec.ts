import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSidenavComponent } from './la-sidenav.component';

describe('LaSidenavComponent', () => {
  let component: LaSidenavComponent;
  let fixture: ComponentFixture<LaSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
