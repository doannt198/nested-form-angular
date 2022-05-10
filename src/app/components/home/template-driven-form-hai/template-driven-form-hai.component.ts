import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-hai',
  templateUrl: './template-driven-form-hai.component.html',
  styleUrls: ['./template-driven-form-hai.component.scss']
})
export class TemplateDrivenFormHaiComponent implements OnInit {
  submited=false
  user: any= {
    hoTen: '',
    diaChi: '',
    dienThoai: '',
    email: '',
    soThich: [],
    congTy: {
      tenCongTy: '',
      diaChiCongTy: ''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submitForm:any) {
    this.submited =true
    if(submitForm.invalid)
    {
      return;
    }
    console.log(this.user)
  }
  
  addSoThich() {
    this.user.soThich.push({
      thuTu: '',
      ten: ''
    })
  }

  removesoThich(i:number) {
      this.user.soThich.splice(i,1)
  }
}
