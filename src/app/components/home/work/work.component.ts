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
  ngOnInit(): void {
  this.getPhepNam()
  }

  getPhepNam():void {
    this.apiService.getPhepNam()
    .subscribe((response)=> {
      console.log("phép năm", response)
      this.results = response
    })
  }

  linearSearch(arr: any , key: string) {
    for(let i =0; i< arr.length;i++) {
      if(arr[i].full_name ===key) {
        return i
      }
    }
    return -1
  }

  show() {
    this.resultSearch = this.linearSearch(this.results, this.value2)
    console.log(this.resultSearch)
    this.showmesage = true
  }
}
