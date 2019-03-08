import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodescannerPage } from './barcodescanner.page';

describe('BarcodescannerPage', () => {
  let component: BarcodescannerPage;
  let fixture: ComponentFixture<BarcodescannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodescannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodescannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
