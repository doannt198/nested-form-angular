import { Component, OnInit } from '@angular/core';
import { initial } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from 'src/app/model/user1.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-anh',
  templateUrl: './upload-anh.component.html',
  styleUrls: ['./upload-anh.component.scss']
})
export class UploadAnhComponent implements OnInit {
  data: UserModel = new UserModel()
  totalLever: Number
  constructor(
    private apiService: ApiService
  ) { }
    dataUser: any
    user = {
      Age: "",
      Brithday: "",
      Gmail: "",
      Name: "",
      lever: "",
    }
    filter: any
  ngOnInit(): void {
    this.getListUser()
  }

  onSave():void {
    this.dataUser.unshift(this.user)
    console.log(this.user)
  } 

  onEdit(item: any):void {
    this.user.Age = item.Age
    this.user.Brithday = item.Brithday
    this.user.Gmail = item.Gmail
    this.user.Name = item.Name
    this.user.lever = item.lever
  }

  onSortByName(): void {
      this.dataUser.sort((a:any ,b:any)=> a.Name.localeCompare(b.Name))
  }

  onSortByYear():void {
    this.dataUser.sort((a:any, b:any)=> a.Age - b.Age)
  }

  onSortByDate() {
      this.dataUser.sort((a:any, b:any)=> new Date(a.Brithday).valueOf() - new Date(b.Brithday).valueOf())
  }

  onFilter():void {
      if(this.filter === undefined) {
      this.getListUser()
      } else {
        var filterItem = this.dataUser.filter((t:any)=> t.Age == this.filter)
        this.dataUser = filterItem
      }
  }

  onDelete(id:number) {
    var index = this.dataUser.findIndex((t: any)=> t.ID === id)
    this.dataUser.splice(index, 1)
  }

  getTotalAge():void {
    this.totalLever = this.dataUser.reduce((total:any , initialValue:any )=> {
      return total += initialValue.lever
    }, 0)
  }

  getListUser(): void {
    this.apiService.getListUser()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response)=> {
      this.dataUser = response
      console.log(this.dataUser)
    })
  }

  private readonly unsubscribe$: Subject<void> = new Subject();
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
