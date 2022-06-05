import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
  @Input() check : any
  @Output() toggle:EventEmitter<any> = new EventEmitter();
  constructor() { }
  text: string
  results:any[] = []
  action = {
    name:"",
    age: 0,
    check: false
  }
  ngOnInit(): void {
    
  }

  hdtoggle() {
    this.toggle.emit();
  }
}
