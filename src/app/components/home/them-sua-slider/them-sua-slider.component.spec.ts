import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaSliderComponent } from './them-sua-slider.component';

describe('ThemSuaSliderComponent', () => {
  let component: ThemSuaSliderComponent;
  let fixture: ComponentFixture<ThemSuaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSuaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
