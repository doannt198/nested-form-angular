import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeEditComponent implements OnInit {
  @Input() detail:any 
  @Output() callbackCancel = new EventEmitter<any>()
  name: string
  password: string
  data=[]
  submited = false
 form:FormGroup
 product: any = {
    id: 0, 
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
   this.product.name = this.detail?.name
   this.product.description = this.detail?.description
   this.product.url = this.detail?.url
  }

  ngOnchanges() {
   
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
    const dataEdit = {
        ...this.product, id: this.detail.id
    }
    this.callbackCancel.emit()
    console.log("Edit", dataEdit)
    this.apiService.editProduct(dataEdit).subscribe((data) => {
      console.log(data)
    })
  }
}

