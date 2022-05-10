import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormHaiComponent } from './reactive-form-hai.component';

describe('ReactiveFormHaiComponent', () => {
  let component: ReactiveFormHaiComponent;
  let fixture: ComponentFixture<ReactiveFormHaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormHaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormHaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
