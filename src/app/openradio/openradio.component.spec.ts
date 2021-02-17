import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenradioComponent } from './openradio.component';

describe('OpenradioComponent', () => {
  let component: OpenradioComponent;
  let fixture: ComponentFixture<OpenradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
