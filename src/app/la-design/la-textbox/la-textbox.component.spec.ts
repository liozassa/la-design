import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTextboxComponent } from './la-textbox.component';

describe('LaTextboxComponent', () => {
  let component: LaTextboxComponent;
  let fixture: ComponentFixture<LaTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
