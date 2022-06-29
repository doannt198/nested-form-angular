import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as queryString from 'query-string';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { cloneDeep } from 'lodash';
import { join } from 'path';
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private router: ActivatedRoute
  ) {}
  user: any = {
    info: '',
    password: '',
    tree: null
  };
  tree: any;
  Urlimage: any
  filterItem: any;
  status: any = [
    { lable: 'Tất cả', value: 1 },
    { lable: 'Loại 1', value: 2 },
    { lable: 'Loại 2', value: 3 },
  ];

  data: any /* = [
    { name: 'A', age: 20, status: true },
    { name: 'B', age: 21, status: true },
    { name: 'C', age: 22, status: false },
    { name: 'D', age: 25, status: true },
    { name: 'E', age: 29, status: false },
    { name: 'F', age: 19, status: true },
    { name: 'G', age: 21, status: false },
  ]; */

  info: any = [
    { name: 'A', age: 20, status: true },
    { name: 'B', age: 21, status: true },
    { name: 'C', age: 22, status: false },
    { name: 'D', age: 25, status: true },
    { name: 'E', age: 29, status: false },
    { name: 'F', age: 19, status: true },
    { name: 'G', age: 21, status: false },
  ];
  showDisplay:boolean = false
  ngOnInit(): void {
   this.data = [
      { name: 'A', age: 20, status: true },
      { name: 'B', age: 21, status: true },
      { name: 'C', age: 22, status: false },
      { name: 'D', age: 25, status: true },
      { name: 'E', age: 29, status: false },
      { name: 'F', age: 19, status: true },
      { name: 'G', age: 21, status: false },
    ];
    this.feathData();
  }

  feathData(): void {
   this.getTree()
  }

  getTree():void {
    this.apiService.getListTree()
    .subscribe(response=> {
      this.tree = response.data
    })
  }

  showDialog() {
    this.showDisplay = true
  }

  set(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: 'Thêm'
    });
  }

  remove(): void {
    localStorage.removeItem('user');
    this.messageService.add({
      severity: 'error',
      summary: 'Thông báo',
      detail: 'Xoá'
    });
  }
  
  handle(): void {
      const index = this.info.map((element:any) => 
       element
      );
      console.log("indexx", index[0])
  }

  handleChange(event: any): void {
    console.log('event', event.value);
    if (event.value === 1) {
      this.filterItem = this.data;
      console.log(event.value);
    } else if (event.value === 2) {
      this.filterItem = this.data.filter((t: any) => t.status == true);
      console.log('filter true', this.filterItem);
      console.log(event.value);
    } else if (event.value === 3) {
      this.filterItem = this.data.filter((t: any) => t.status == false);
      console.log(event.value);
    }
  }

  handlSelectImage(event: any): void {
    this.showDisplay = false
    this.Urlimage = event 
  }

  xoaAnh() {
    this.Urlimage = null
  }
  submited = false
  submit() {
    this.submited = true
  }
}
