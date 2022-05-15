import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { filter, from, Observable } from 'rxjs';
import { TestComponent } from '../test/test.component';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  constructor() {   
  }
  @ViewChild(TestComponent)
   view:TestComponent
  ngOnInit(): void {
  }

  onclick() {
    this.view.value++
  }
}
