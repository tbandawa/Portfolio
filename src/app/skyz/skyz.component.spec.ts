import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyzComponent } from './skyz.component';

describe('SkyzComponent', () => {
  let component: SkyzComponent;
  let fixture: ComponentFixture<SkyzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
