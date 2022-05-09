import { Component, OnInit, ViewChild } from '@angular/core';
import { Test1Component } from '../test1/test1.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
@ViewChild(Test1Component)
 test1:Test1Component
  constructor() { }

  ngOnInit(): void {
  }
  onUp(){
    this.test1.value++;
  }
}