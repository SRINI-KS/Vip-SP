import { Component } from '@angular/core';
import { DemoService } from '../../add-request/Services/demo/demo.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private demo:DemoService){
    
  }

  get(){
    this.demo.demo().subscribe(
      (Response)=>{
        console.log(Response)
      }

    )
  }
}
