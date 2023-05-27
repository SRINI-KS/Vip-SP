import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderDashboardComponent } from '../../Components/provider-dashboard/provider-dashboard.component';
import { UserQueryComponent } from '../../Components/user-query/user-query.component';
import { PnavBarComponent } from '../../Components/pnav-bar/pnav-bar.component';


@NgModule({
  declarations: [
    ProviderDashboardComponent,
    UserQueryComponent,
    PnavBarComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
