import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit, OnChanges {
  @Input() dataSlide: any;
  @Input() value: any
  @Output() load = new EventEmitter<any>();
  dataSS: any;
  slider = false
  styleTrue: {color: 'red', width: '10px'}
  styleFalse: {color: 'blue', widthL: '20px'}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSlide && this.dataSlide && this.dataSlide.length > 0) {
      this.dataSS = this.dataSlide
    }
  }
  constructor() {}

  ngOnInit(): void {
    
  }

  handlePlus(): void {
    this.load.emit(true)
  }

  handlePre(): void {
    this.load.emit(false)
  }
}
