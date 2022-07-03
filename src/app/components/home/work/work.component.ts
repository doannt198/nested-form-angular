import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }
  value2: any;
  showmesage = false
  results:any;
  resultSearch: any;
  resultSearchNhiPhan: any
  keyword: any;
  number: Array<any>;
  ngOnInit(): void {
  this.getPhepNam()
  this.number = [1,3,4,5,7,8,9,11]
  }

  getPhepNam():void {
    this.apiService.getPhepNam()
    .subscribe((response)=> {
      console.log("phép năm", response)
      this.results = response
    })
  }

  show() {
    this.resultSearch = this.linearSearch(this.results, this.value2)
    console.log(this.resultSearch)
    this.showmesage = true
  }

  linearSearch(arr: any , key: string) {
    for(let i =0; i< arr.length;i++) {
      if(arr[i].full_name ===key) {
        return i
      }
    }
    return -1
  }
/*  Thuật toán sắp sếp nhị phân */
  show2() {
   this.resultSearchNhiPhan = this.binarySearch(this.number, this.keyword)
   console.log(this.resultSearchNhiPhan)
  }
 
    binarySearch(nums: Array<number>, key: number): number {
      let low = 0;
      let high = nums.length - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        mid;
        if (nums[mid] == key) {
          return mid ;
        }
        if (key > nums[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return -1;
    }
 }
