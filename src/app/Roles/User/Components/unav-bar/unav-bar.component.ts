import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-unav-bar',
  templateUrl: './unav-bar.component.html',
  styleUrls: ['./unav-bar.component.css']
})
export class UnavBarComponent implements AfterViewInit{
   @ViewChild ('menu_button')  button!:ElementRef;
   @ViewChild ('menu')  menu!:ElementRef;

  constructor(private authService:AuthServiceService){
  
  }
  ngAfterViewInit(): void {
    this.button.nativeElement.addEventListener('click', () => {
        this.menu.nativeElement.classList.toggle('hidden');
       });
  }

  // username
  userName=this.authService.getUserName()
  logout(){
    this.authService.logOut();
  }


  
  
 

  
}
