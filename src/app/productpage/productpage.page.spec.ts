import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpagePage } from './productpage.page';

describe('ProductpagePage', () => {
  let component: ProductpagePage;
  let fixture: ComponentFixture<ProductpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
