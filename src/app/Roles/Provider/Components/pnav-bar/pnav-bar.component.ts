import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-pnav-bar',
  templateUrl: './pnav-bar.component.html',
  styleUrls: ['./pnav-bar.component.css']
})
export class PnavBarComponent implements AfterViewInit{
  highlight=1;
  
  @ViewChild ('menu_button')  button!:ElementRef;

   @ViewChild ('menu')  menu!:ElementRef;


  constructor(private authService:AuthServiceService){}
  userName=this.authService.getUserName()

 ngAfterViewInit(): void {
  this.button.nativeElement.addEventListener('click', () => {
        this.menu.nativeElement.classList.toggle('hidden');
       }); 
 }

  logout(){
    this.authService.logOut();
  }
changeBg(btn:any){
  this.highlight=btn

}



}

