import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-pnav-bar',
  templateUrl: './pnav-bar.component.html',
  styleUrls: ['./pnav-bar.component.css']
})
export class PnavBarComponent {

  constructor(private authService:AuthServiceService){}

  logout(){
    this.authService.logOut();
  }

}
