import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private authService:AuthServiceService,private router:Router){}

  ngOnInit(): void {

    if (this.authService.isLogin() && this.authService.isProvider()) {
      this.router.navigate(['provider']);
    } else if (this.authService.isLogin() && this.authService.isUser()) {
      this.router.navigate(['user']);
    }

  }

}
