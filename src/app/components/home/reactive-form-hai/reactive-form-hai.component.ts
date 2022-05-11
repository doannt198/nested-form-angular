import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-hai',
  templateUrl: './reactive-form-hai.component.html',
  styleUrls: ['./reactive-form-hai.component.scss']
})
export class ReactiveFormHaiComponent implements OnInit {
  submitForm: FormGroup
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.submitForm =this.fb.group({
        hoTen: ['', [Validators.required]],
        diaChi: ['',[Validators.required]],
        dienThoai: [''],
        email: ['',[Validators.required]],
        check: [false],
        soThich: this.fb.array([]),
        congTy:this.fb.group({
          tenCongTy: ['', [Validators.required]],
          diaChi: ['', [Validators.required]]
        }),
        gioiTinh: [''],
        loai: ['']
    })
  }
  get soThich():FormArray {
    return this.submitForm.get('soThich') as FormArray
  }
   
  get checkRequired() {
    return this.submitForm.get('check')
  }
  check() {
    console.log(this.checkRequired?.value)
    if(this.checkRequired?.value) {
        this.submitForm.controls.dienThoai.setValidators([Validators.required])
    }else {
        this.submitForm.controls.dienThoai.clearValidators()
    }
    this.submitForm.controls.dienThoai.updateValueAndValidity({ emitEvent:false })
  }

  soThichItem() {
    return this.fb.group({
        tenCongTy: ['', [Validators.required]],
        diaChi: ['', [Validators.required]]
    })
  }

  addSoThich() {
    this.soThich.push(this.soThichItem())
  }

  removeSoThich( i:any) {
      this.soThich.removeAt(i)
  }

  onSubmit(submitForm:any ) {
    console.log( submitForm.value)
    this.submitForm.reset();
  }
}
