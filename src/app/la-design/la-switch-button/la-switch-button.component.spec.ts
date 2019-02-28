import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSwitchButtonComponent } from './la-switch-button.component';

describe('LaSwitchButtonComponent', () => {
  let component: LaSwitchButtonComponent;
  let fixture: ComponentFixture<LaSwitchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSwitchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
