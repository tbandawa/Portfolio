import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityoneComponent } from './cityone.component';

describe('CityoneComponent', () => {
  let component: CityoneComponent;
  let fixture: ComponentFixture<CityoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
