import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormHaiComponent } from './template-driven-form-hai.component';

describe('TemplateDrivenFormHaiComponent', () => {
  let component: TemplateDrivenFormHaiComponent;
  let fixture: ComponentFixture<TemplateDrivenFormHaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormHaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormHaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
