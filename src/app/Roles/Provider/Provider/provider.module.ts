import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { PnavBarComponent } from '../Components/pnav-bar/pnav-bar.component';
import { UserQueryComponent } from '../Components/user-query/user-query.component';
import { ProviderComponent } from './provider.component';


@NgModule({
  declarations: [
    ProviderComponent,
    UserQueryComponent,
    PnavBarComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
bootstrap:[ProviderComponent]
})
export class ProviderModule { }
