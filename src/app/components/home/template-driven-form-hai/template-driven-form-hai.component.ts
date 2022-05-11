import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-hai',
  templateUrl: './template-driven-form-hai.component.html',
  styleUrls: ['./template-driven-form-hai.component.scss']
})
export class TemplateDrivenFormHaiComponent implements OnInit {
  
  constructor() { }
  data:any= []
  submited=false
  dataSoThich: any =[]
  user: any= {
    hoTen: '',
    diaChi: '',
    dienThoai: '',
    email: '',
    ngaySinh: '',
    check: false,
    soThich: [],
    congTy: {
      tenCongTy: '',
      diaChiCongTy: ''
    },
    gioiTinh:'',
    loai: ''
  }
  ngOnInit(): void {
  }

  onSubmit(submitForm:any) {
    this.submited = true
    if(submitForm.invalid) 
    {
      return;
    }
    console.log(this.user)
    this.data.push(this.user)
    this.user= {
      hoTen: '',
      diaChi: '',
      dienThoai: '',
      email: '',
      check: false,
      soThich: [],
      congTy: {
        tenCongTy: '',
        diaChiCongTy: ''
      },
      gioiTinh:'',
      loai: ''
    }
   
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

  remove(i:number) {
      this.data.splice(i,1)
  }
}
