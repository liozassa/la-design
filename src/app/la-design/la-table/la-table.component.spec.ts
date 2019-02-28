import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTableComponent } from './la-table.component';

describe('TableSystemComponent', () => {
  let component: LaTableComponent;
  let fixture: ComponentFixture<LaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
