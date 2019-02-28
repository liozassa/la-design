import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaDropdownlistComponent } from './la-dropdownlist.component';

describe('LaDropdownlistComponent', () => {
  let component: LaDropdownlistComponent;
  let fixture: ComponentFixture<LaDropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
