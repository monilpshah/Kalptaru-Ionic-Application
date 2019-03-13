import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproductPage } from './searchproduct.page';

describe('SearchproductPage', () => {
  let component: SearchproductPage;
  let fixture: ComponentFixture<SearchproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
