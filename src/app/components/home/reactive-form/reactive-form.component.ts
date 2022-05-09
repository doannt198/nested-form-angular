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
      dienThoai: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5), Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      soThich: this.fb.array([]),
      congTy: this.fb.group({
        tenCongTy: ['', [Validators.required]],
        diaChi: ['', [Validators.required]]
      }),
    });
  }

  get soThich(): FormArray {
    return this.formTest.get('soThich') as FormArray
  }

  newSoThich(): FormGroup{
    return this.fb.group({
      thuTu: [''],
      ten: [''],
      skills: this.fb.array([])
    })
  } 
  
  newSkil(): FormGroup {
     return this.fb.group({
        skill: [''],
        exp: ['']
     })
  }

  skill(index:number): FormArray {
    return this.soThich.at(index).get('skills') as FormArray
  } 
  
  addSkill(index:number) {
    this.skill(index).push(this.newSkil())
  }

  removeSkill(index:number, skillindex:number) {
    this.skill(index).removeAt(skillindex);
  }

  addSoThich() {
    this.soThich.push(this.newSoThich())
  }

  removeSoThich(index: number) {
    this.soThich.removeAt(index)
  }

  onSubmit(formTest: any) {
    this.data = formTest.value
    console.log(formTest.value)
  }
}
