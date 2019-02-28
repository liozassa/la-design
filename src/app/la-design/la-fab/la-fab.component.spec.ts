import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFabComponent } from './la-fab.component';

describe('LaFabComponent', () => {
  let component: LaFabComponent;
  let fixture: ComponentFixture<LaFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
