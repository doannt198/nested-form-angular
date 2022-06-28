import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuVienAnhComponent } from './thu-vien-anh.component';

describe('ThuVienAnhComponent', () => {
  let component: ThuVienAnhComponent;
  let fixture: ComponentFixture<ThuVienAnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuVienAnhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuVienAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
