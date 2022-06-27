import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  @Input() dataSlide: any
  constructor() { }

  ngOnInit(): void {
  }

  
}
