import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappyComponent } from './snappy.component';

describe('SnappyComponent', () => {
  let component: SnappyComponent;
  let fixture: ComponentFixture<SnappyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnappyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
