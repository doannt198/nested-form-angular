import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  id:number=0;
  datadetail:any=[]
  constructor( 
    private router:ActivatedRoute,
    private apiService:ApiService,
    private routerlink:Router
    ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id']
    this.apiService.getDetail(this.id).subscribe(respon=>{
      console.log(respon)
    this.datadetail=respon
    })
  }
  toFormEdit(id:number){
    this.routerlink.navigateByUrl(`home/home-add/${id}`);
  }
}
