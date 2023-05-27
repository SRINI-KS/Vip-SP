import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from '../../Components/UserDashboard/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from '../../Components/UserHome/user-home/user-home.component';
import { AddRequestComponent } from '../../Components/add-request/add-request.component';
import { UnavBarComponent } from '../../Components/unav-bar/unav-bar.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHomeComponent,
    AddRequestComponent,
    UnavBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
