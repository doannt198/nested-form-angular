import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private messageService: MessageService, 
    private router: Router
  ) {}
  user: any = {
    username: '', 
    password: ''
  }
  public error : number = 0
  submited = false
  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin() {
    if(sessionStorage.getItem('user')) {
      this.router.navigate(['them-san-pham'])
    }
  }

  onLogin(submitForm: any) {
   this.submited = true
    if(submitForm.invalid) {
      return 
    }
    if(this.user.username == "admin" && this.user.password == "admin") {
      sessionStorage.setItem('user', JSON.stringify(this.user))
      this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Đăng nhập thành công'})
      this.router.navigate(['thu-vien'])
    } else {
      this.error = -1
    }
   
  }
}
