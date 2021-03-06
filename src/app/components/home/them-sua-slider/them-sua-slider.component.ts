import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import * as queryString from 'query-string'

@Component({
  selector: 'app-them-sua-slider',
  templateUrl: './them-sua-slider.component.html',
  styleUrls: ['./them-sua-slider.component.scss']
})
export class ThemSuaSliderComponent implements OnInit {

  private readonly unsubscribe$: Subject<void> = new Subject();
  dataList: any = [];
  data: any = [];
  totalRecord = 0;
  dataDetail: any;
  selectSlider = null;
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}
  query = {
    filter: '',
    offSet: 0,
    pageSize: 5,
    screen: '',
  };
  showdialog = false;
  showLibrary = false;
  UrlImg: any = null;
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData(): void {
    this.getListSlider();
  }

  loadList() {
    this.getListSlider();
    this.showdialog = false;
  }

  getListSlider(): void {
  
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListSlider(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.dataList = response.data.data;
          this.totalRecord = response.data.RecordsTotal;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  showDiaglog(): void {
    this.showdialog = true;
    this.selectSlider = null
  }

  paginate(event: any): void {
    console.log(event);
    this.query.offSet = event.first;
    this.query.pageSize = event.rows;
    this.getListSlider();
  }

  handleEditSlider(item: any) {
    this.showdialog = true;
    this.selectSlider = item
  }

  deleteProduct(dataList: any): void {
    this.confirmationService.confirm({
      message: `B???n c?? ch???c ch???n mu???n x??a ${dataList.Name} ?`,
      accept: () => {
        this.apiService.deleteSlider(dataList.Id).subscribe({
          next: (response) => {
            if (response.Status === 'success') {
              this.messageService.add({
                severity: 'success',
                summary: 'Th??ng b??o',
                detail: 'X??a th??nh c??ng',
              });
              this.getListSlider();
            }
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Th??ng b??o',
              detail: 'X??a th???t b???i',
            });
          },
        });
      },
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
