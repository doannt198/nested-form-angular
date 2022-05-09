import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter, from, Observable } from 'rxjs';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  value=0
  constructor() {  
    
   }

  ngOnInit(): void {
    
  }
}
