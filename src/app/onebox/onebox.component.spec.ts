import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneboxComponent } from './onebox.component';

describe('OneboxComponent', () => {
  let component: OneboxComponent;
  let fixture: ComponentFixture<OneboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
