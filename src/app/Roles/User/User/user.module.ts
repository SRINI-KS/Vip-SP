import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from '../Components/UserHome/user-home/user-home.component';
import { AddRequestComponent } from '../Components/add-request/add-request.component';
import { UnavBarComponent } from '../Components/unav-bar/unav-bar.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    AddRequestComponent,
    UnavBarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
