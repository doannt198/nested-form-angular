import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit, OnChanges {
  @Input() dataSlide: any;
  dataSS: any;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSlide && this.dataSlide && this.dataSlide.length > 0) {
      this.dataSS = this.dataSlide
    }
  }
  constructor() {}

  ngOnInit(): void {
    
  }
}
