import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-unav-bar',
  templateUrl: './unav-bar.component.html',
  styleUrls: ['./unav-bar.component.css']
})
export class UnavBarComponent {
  
  constructor(private authService:AuthServiceService){}

  // username
  userName=this.authService.getUserName()
  logout(){
    this.authService.logOut();
  }


}
