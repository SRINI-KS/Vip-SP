import { Component } from '@angular/core';
import { UserDetails } from './UserDetails';
import { UserDetailsService } from './Services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private userDetailsService:UserDetailsService){}

  updateDetails:UserDetails={
    aadharNumber: '4555 5555 2222 3333',
    panNumber: 'QEXPS4507F',
    currentAddress: 'DFKSLJFL',
    country: 'JFSKLJFL',
    city: 'DFKLJFS',
    state: 'JDKLFSJ',
    pinCode: null
  }


  updateUserDetails(){
    this.userDetailsService.updateCustomerDetails(this.updateDetails).subscribe(
      (Response)=>{
        console.log(Response)
      }
    )
  }

}
