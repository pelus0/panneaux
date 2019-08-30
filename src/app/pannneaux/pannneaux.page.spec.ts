import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PannneauxPage } from './pannneaux.page';

describe('PannneauxPage', () => {
  let component: PannneauxPage;
  let fixture: ComponentFixture<PannneauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannneauxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PannneauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
