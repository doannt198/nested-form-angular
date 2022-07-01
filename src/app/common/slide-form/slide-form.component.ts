import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrls: ['./slide-form.component.scss']
})
export class SlideFormComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
  ) {}

  showLibrary = false;
  submited = false;
  detail: any = {
    Name: '',
    Screen: '',
    Order: 0,
    Status: false,
    ImageUrl: null
  };
  @Input() selectSlider: any = null;
  @Output() loadSlider = new EventEmitter<any>();
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectSlider && this.selectSlider && this.selectSlider.Id) {
       this.apiService
        .getListDetailSlider(this.selectSlider.Id)
        .subscribe({
          next: (response) => {
            this.detail = response.data;
          console.log("detaillllllllll", this.detail)
          this.detail.Status = this.detail.Status == 1 ? true : false
            console.log("chi tiết", this.detail.Status)
          },
          error: (error) => {
            console.error(error);
          },
        }); 
    }
  }

  ngOnInit(): void {}

  selectedImg(event: any): void {
    this.showLibrary = false;
    this.detail.ImageUrl = event;
  }

  onSaveSlider(dataForm: any): void {
    this.submited = true;
    if (dataForm.invalid) {
      return;
    }
    const dataSave = {...this.detail};
    dataSave.Status = dataSave.Status ? 1 : 0;
    this.apiService.postSlider(dataSave).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thông báo',
          detail: 'Thêm thành công',
        });
        this.loadSlider.emit();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Thông báo',
          detail: 'Thêm thất bại',
        });
      },
    }); 
  }
  
  deleteOption() {
    this.detail.ImageUrl = null
  }

  showLibraryDialog(): void {
    this.showLibrary = true;
  }
}
