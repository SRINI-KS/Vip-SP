import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from '../Components/UserHome/user-home/user-home.component';
import { AddRequestComponent } from '../Components/add-request/add-request.component';
import { UnavBarComponent } from '../Components/unav-bar/unav-bar.component';
import { UserComponent } from './user.component';
import { MaterialDesignModule } from 'src/app/Modules/MaterialDesign/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DragDirective } from '../Directives/drag.directive';
import { MyRequestComponent } from '../Components/my-request/my-request.component';
import { CardComponent } from 'src/app/Components/Cards/card/card.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    AddRequestComponent,
    UnavBarComponent,
    UserComponent,
    MyRequestComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    DragDirective ,
    CarouselModule.forRoot()   
  ],
  providers: [],
})
export class UserModule {}
