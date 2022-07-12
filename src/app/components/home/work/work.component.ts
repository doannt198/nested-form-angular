import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  value2: any;
  showmesage = false;
  results: any;
  resultSearch: any;
  resultSearchNhiPhan: any;
  keyword: any;
  number: Array<any>;
  sunshine: any;
  ngOnInit(): void {
    this.getPhepNam();
    this.getTest();
  }

  getPhepNam(): void {
    this.apiService.getPhepNam().subscribe((response) => {
      console.log('phép năm', response);
      this.results = response;
    });
  }

  show() {
    this.resultSearch = this.linearSearch(this.results, this.value2);
    console.log(this.resultSearch);
    this.showmesage = true;
  }

  linearSearch(arr: any, key: string) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].full_name === key) {
        return i;
      }
    }
    return -1;
  }
  /*  Sắp xếp nhị phân */
  Sort() {
    this.sortItems(this.sunshine);
    console.log(this.sunshine);
  }

  binarySearch(nums: any, key: any) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      mid;
      if ((nums[mid].organizationName).localeCompare(key) == 0) {
        return mid;
      } 
       if ((nums[mid].organizationName).localeCompare(key) == -1) {
        low = mid + 1;
      } else {
        high = mid - 1;
      } 
    }
    return -1;
  }

  show2() {
    this.resultSearchNhiPhan = this.binarySearch(this.sunshine, this.keyword);
    console.log("Kết quả", this.resultSearchNhiPhan)
  }

  sortItems(a: any) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (
          (a[j]?.organizationName).localeCompare(a[j + 1]?.organizationName) ==
          1
        ) {
          let temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
        }
      }
    }
    return a;
  }
 
  getTest() {
      var i= 0;
      for(i=0; i< 10;i++) {
        i++
        console.log(i)
      }
  }
  
}
