import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }
  user: any = {
    username: '', 
    password: ''
  }
  submited = false
  ngOnInit(): void {

  }
  onLogin(submitForm: any) {
   this.submited = true
    if(submitForm.invalid) {
      return 
    }
    if(this.user.username == "admin" && this.user.password == "admin") {
      localStorage.setItem('user', JSON.stringify(this.user))
      this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Đăng nhập thành công'})
      console.log(this.user)
    }
  }
}
