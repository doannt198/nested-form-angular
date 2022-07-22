import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DialogModule } from 'primeng/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ProductModel } from 'src/app/model/user.model';
@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.scss'],
})
export class HomeAddComponent implements OnInit {
  listProduct: any = [];
  displayEdit: boolean = false;
  idEdit = 0;
  getList: any;
  data: ProductModel = new ProductModel()
  user = [
    { name: 'A', age: 18, status: true },
    { name: 'A', age: 18, status: true },
    { name: 'A', age: 18, status: true },
    { name: 'A', age: 18, status: true },
  ];
  user1 = [];
  showDetail: boolean = false
  showEdit: boolean = false
  dataDetail: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  getListProduct() {
    this.apiService.getListProduct().subscribe((response) => {
      this.listProduct = response
    });
  }
  onSubmit(submitform: any) {
    if (this.idEdit) {
      const dataEdit = {
        ...submitform.value,
        id: this.idEdit,
      };
      this.apiService.editProduct(dataEdit).subscribe((_) => {
        const index = this.listProduct.findIndex(
          (e: any) => e.id === this.idEdit
        );
        this.listProduct[index].name = this.data.name;
        this.listProduct[index].description = this.data.description;
        this.listProduct[index].url = this.data.url;
      });
    } else {
      this.apiService.addProduct(submitform.value).subscribe((res) => {
        (this.data.name = ''),
          (this.data.description = ''),
          (this.data.url = ''),
          this.getListProduct();
      });
    }
      console.log(this.data)
  }

  onDelete(item: any) {
    this.confirmationService.confirm({
      message: `Bạn chắc chắn muốn xoá <b>${item.name}</b>`,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.apiService.deleteProduct(item.id).subscribe((_) => {
          this.getListProduct();
        });
      }
    })
  }

  handleShowDetail(item: any) {
    this.showDetail = true
    this.apiService.getDetail(item.id)
    .subscribe((response)=>{
        console.log("chi tiết sản phẩm", response)
        this.dataDetail = response
    })
  }

  showDialogEdit(item: any) {
    this.displayEdit = true;
    this.apiService.getDetail(item.id)
    .subscribe((response)=>{
        console.log("chi tiết sản phẩm", response)
        this.dataDetail = response
    })
  }

  cancel() {
    this.displayEdit = false;
    this.getListProduct();
  }
}
