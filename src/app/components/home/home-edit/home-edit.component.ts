import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeEditComponent implements OnInit {
  name: string
  password: string
  data=[]
  submited = false
 form:FormGroup
 product: any = {
    name: '',
    description: '',
    url: ''
 }
  constructor(
    private router: ActivatedRoute,
    private apiService: ApiService,
    private routerlink: Router,
    private fb: FormBuilder
  ) {
    /* this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      repass: ['', [Validators.required]],
      nameplus: ['', [Validators.required]],
      passplus: ['', [Validators.required]],
      infogroup: this.fb.group({
        nametest: ['', [Validators.required]],
        passtest: ['', [Validators.required]],
      }),
    }); */
  }
 /*  searchControl = new FormControl() */
  ngOnInit(): void {
   /*  this.getProduct()
    this.searchControl.valueChanges.subscribe(value =>
        console.log(value)
   ) */
  }
  /* onSubmit(save:any) {
     console.log(save.value)
  }
  getProduct(){
    this.apiService.getListProduct().pipe(
      map((x:any) => x.map((e:any)=> e.url))
    ).subscribe({
      next: (res) => {
        this.data = res
      },
      error: (err)=> {
        console.log( err )
      }
    })
  } */
  onSubmit() {

  }
}

