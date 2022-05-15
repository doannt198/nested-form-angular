import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  formTest: FormGroup;
  data: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formTest = this.fb.group({
      hoTen: ['', Validators.required],
      diaChi: ['', Validators.required],
      dienThoai: [
        '',
        [
          Validators.maxLength(10),
          Validators.minLength(5),
          Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$'),
        ],
      ],
      check: [false],
      email: ['', [Validators.required, Validators.email]],
      soThich: this.fb.array([]),
      congTy: this.fb.group({
        tenCongTy: ['', [Validators.required]],
        diaChi: ['', [Validators.required]],
      }),
    });
  }

  get soThich(): FormArray {
    return this.formTest.get('soThich') as FormArray;
  }
  
  get check1() {
    return this.formTest.get('check')
  }

  check() {
    console.log(this.check1?.value)
    if (this.check1?.value) {
      this.formTest.controls.dienThoai.setValidators([Validators.required]);
    } else {
      this.formTest.controls.dienThoai.clearValidators();
    } 
    this.formTest.controls.dienThoai.updateValueAndValidity({ emitEvent : false})
  }

  newSoThich(): FormGroup {
    return this.fb.group({
      thuTu: [''],
      ten: [''],
      skills: this.fb.array([]),
    });
  }

  newSkil(): FormGroup {
    return this.fb.group({
      skill: [''],
      exp: [''],
    });
  }

  skill(index: number): FormArray {
    return this.soThich.at(index).get('skills') as FormArray;
  }

  addSkill(index: number) {
    this.skill(index).push(this.newSkil());
  }

  removeSkill(index: number, skillindex: number) {
    this.skill(index).removeAt(skillindex);
  }

  addSoThich() {
    this.soThich.push(this.newSoThich());
  }

  removeSoThich(index: number) {
    this.soThich.removeAt(index);
  }

  onSubmit(formTest: any) {
    this.data = formTest.value;
    console.log(formTest.value);
  }

  
}
