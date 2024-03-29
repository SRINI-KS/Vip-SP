import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddRequestComponent } from '../Components/add-request/add-request.component';
import { UserHomeComponent } from '../Components/UserHome/user-home/user-home.component';
import { MyRequestComponent } from '../Components/my-request/my-request.component';
import { UserDetailsComponent } from '../Components/user-details/user-details.component';
import { OrderDetailsComponent } from '../Components/order-details/order-details.component';

const routes: Routes = [
  {
    path:'',component:UserComponent,children:[
      {
        path:'addrequest',component:AddRequestComponent
      },
      {
        path:'userhome',component:UserHomeComponent
      },
      {
        path:'myrequest',component:MyRequestComponent
      },
      {
        path:'profile',component:UserDetailsComponent
      },
      {
        path:'orderDetails',component:OrderDetailsComponent
      },

      {
        path:'',redirectTo:'/user/userhome',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
