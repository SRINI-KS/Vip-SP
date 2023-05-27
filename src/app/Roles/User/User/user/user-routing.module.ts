import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from '../../Components/UserDashboard/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from '../../Components/UserHome/user-home/user-home.component';
import { AddRequestComponent } from '../../Components/add-request/add-request.component';

const routes: Routes = [
  {
    path:'',component:UserDashboardComponent,children:[
      {
        path:'addrequest',component:AddRequestComponent
      },
      {
        path:'userhome',component:UserHomeComponent
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
