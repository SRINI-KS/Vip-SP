import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './LoginService/login.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { AlertifyService } from 'src/app/Services/Alertify/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  constructor(private f: FormBuilder,private loginService:LoginService,
    private authService:AuthServiceService, private router:Router,
    private alertify:AlertifyService) {}

  ngOnInit(): void {

    if (this.authService.isLogin() && this.authService.isProvider()) {
      this.router.navigate(['provider']);
    } else if (this.authService.isLogin() && this.authService.isUser()) {
      this.router.navigate(['user']);
    }

  }

  loginForm = this.f.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  login() {
    if(this.loginForm.valid){

      this.loginService.loginUser(this.loginForm.value).subscribe(
        (Response:any)=>{
          this.authService.setToken(Response.data.token)
          this.authService.setUsername(Response.data.username)
          this.authService.setRole(Response.data.role)
          this.alertify.success("Login Success")
          this.loginForm.reset()
          this.ngOnInit()
          console.log(Response)

        },
        (Error:HttpErrorResponse)=>{
          this.alertify.error(Error.message)
        }
      )
    }
  }

}
