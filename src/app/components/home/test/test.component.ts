import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Test1Component } from '../test1/test1.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  value=0
  constructor() { }

  ngOnInit(): void {
  }
}