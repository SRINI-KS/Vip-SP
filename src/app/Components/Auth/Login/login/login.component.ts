import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './LoginService/login.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  constructor(private f: FormBuilder,private loginService:LoginService,
    private authService:AuthServiceService, private router:Router) {}

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
          this.authService.setToken(Response.token)
          this.authService.setUsername(Response.username)
          this.authService.setRole(Response.role)
          this.loginForm.reset()
          this.ngOnInit()
          console.log(Response)
        }
      )
    }
  }

}
