import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseScrollAnimationComponent } from './mouse-scroll-animation.component';

describe('MouseScrollAnimationComponent', () => {
  let component: MouseScrollAnimationComponent;
  let fixture: ComponentFixture<MouseScrollAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseScrollAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseScrollAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
