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
   @ViewChildren(UnavBarComponent) el?:QueryList<UnavBarComponent>;

  constructor(private authService:AuthServiceService){
  
  }
  ngAfterViewInit(): void {
    this.button.nativeElement.addEventListener('click', () => {
      console.log("dskfjalskfj")
        this.menu.nativeElement.classList.toggle('hidden');
       });
       this.el?.forEach((el)=>console.log("menu",el))
  }

  // username
  userName=this.authService.getUserName()
  logout(){
    this.authService.logOut();
  }


  
  
 

  
}
