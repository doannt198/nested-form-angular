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
    this.checkLogin();
  }

   checkLogin() {
    if(localStorage.getItem('user')) {
      this.router.navigate(['thu-vien'])
    }
  } 

  onLogin(submitForm: any) {
   this.submited = true
    if(submitForm.invalid) {
      return 
    }
    if(this.user.username =='admin' && this.user.password =='123') {
      localStorage.setItem('user', JSON.stringify(this.user))
    } else {
      this.error = -1
    }
  }
}
