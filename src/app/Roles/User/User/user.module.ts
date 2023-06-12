import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from '../Components/UserHome/user-home/user-home.component';
import { AddRequestComponent } from '../Components/add-request/add-request.component';
import { UnavBarComponent } from '../Components/unav-bar/unav-bar.component';
import { UserComponent } from './user.component';
import { MaterialDesignModule } from 'src/app/Modules/MaterialDesign/material-design/material-design.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DragDirective } from '../Directives/drag.directive';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    AddRequestComponent,
    UnavBarComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    DragDirective    
  ],
  providers: [],
})
export class UserModule {}
