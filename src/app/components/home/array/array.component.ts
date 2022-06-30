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
    tree: null,
    cvTree: null, 
    urlimage: ''
  };
  tree: any;
  convertTree: any
  Urlimage: any
  filterItem: any;
  selectItem: any;
  results: any;
  organire: any;
  selectOrganire: any 
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
  showDisplay: boolean = false
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
   this.getTree();
   this.getConvertTree();
   this.getAutoCompete();
   this.getOrganize()
  }

  getTree():void {
    this.apiService.getListTree()
    .subscribe(response=> {
      this.tree = response.data
    })
  }
  
  getNode(item: any) {
    return {
      label: item.formTypeName || item.formTypeId,
      data: item.formTypeId,
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      children: item.children
    };
  }
  
  loopEveryNodeTree(list: any): void {
    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i].children) && list[i].children.length) {
          list[i] = this.getNode(list[i]);
          this.loopEveryNodeTree(list[i].children);
        } else {
          list[i] = this.getNode(list[i]);
        }
    }
  }

  getConvertTree():void {
    this.apiService.getConvertTree()
    .subscribe(response => {
      const data = response.data
      this.loopEveryNodeTree(data);
      this.convertTree = data
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
  }

  handleChange(event: any): void {
    if (event.value === 1) {
      this.filterItem = this.data;
    } else if (event.value === 2) {
      this.filterItem = this.data.filter((t: any) => t.status == true);
    } else if (event.value === 3) {
      this.filterItem = this.data.filter((t: any) => t.status == false);
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
    const infomation = {...this.user, urlimage : this.Urlimage }
    console.log("dataSave", infomation)
  }

/*   Dropdown */

  getOrganize(): void {
    this.apiService.getOrganize()
    .subscribe((response) =>{
      console.log("response", response)
      this.organire = response.data
    })
  }

/*   autoComplete */
 search(event:any):void {
    const query = event.query
    console.log('event', event.query)
   
 }

 getAutoCompete(): void {
   this.apiService.getAutoComplete().subscribe((response)=>
     this.results = response.data
   )
 }
}
