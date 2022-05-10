import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  data: any;
  user: any = {
    hoTen: '',
    diaChi: '',
    dienThoai: '',
    email: '',
    soThich: [],
    tenCongTy: '',
    diaChiCongTy: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
  }

  addSoThich() {
    this.user.soThich.push({
      thuTu: '',
      ten: '',
    });
  }

  removeSoThich(i: number) {
    this.user.soThich.splice(i, 1);
  }
}
