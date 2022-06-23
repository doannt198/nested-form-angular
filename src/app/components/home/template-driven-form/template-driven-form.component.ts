import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  data: any;
  submitted = false;
  user: any = {
    hoTen: '',
    diaChi: '',
    dienThoai: '',
    check: false,
    email: '',
    soThich: [],
    congTy:{
      tenCongTy: '',
      diaChiCongTy: '',
    }
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
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

/* function gmailValidator( user:any) {
  if (user.email.includes('@gmail.com')) {
    return null
  }
  return {gmail: true}
} */