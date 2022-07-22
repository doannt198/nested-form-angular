import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAnhComponent } from './upload-anh.component';

describe('UploadAnhComponent', () => {
  let component: UploadAnhComponent;
  let fixture: ComponentFixture<UploadAnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAnhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
