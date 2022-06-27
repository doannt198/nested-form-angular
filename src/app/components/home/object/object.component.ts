import { Component, OnInit, ViewChild } from '@angular/core';
import { ArrayComponent } from '../array/array.component';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  text: number | string 

  
}
