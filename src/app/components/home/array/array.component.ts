import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  value = 0
  dataSlide: any;
  query:any = {
    Screen: '', 
    filter: '', 
    offSet: 0,
    pageSize: 10,
  };
  giatri:any;
  ngOnInit(): void {
    this.getListSlide()
  }

  getListSlide(): void {
    const queryParams = queryString.stringify(this.query)
    this.apiService.getListSlide(queryParams).subscribe((reponse => {
      this.dataSlide = reponse.Data.Data
    }))
  }

  onLoad(event:any):void {
    this.getListSlide();
   this.value = this.value + 1 
    this.giatri = event
  }
}
