import { Component, OnInit, ViewChild } from '@angular/core';
import { ArrayComponent } from '../array/array.component';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  constructor() { }

  age = true
  toggle = false
  action = [{
    name:"đoàn",
    age:24,
    check: true
  },
  {
    name:"đạt",
    age:24,
    check: true
  }]
  ngOnInit(): void {
  }

  onSubmit() {
    this.toggle = false
  }

  handleTogglForm() {
    this.toggle = !this.toggle
  }
}