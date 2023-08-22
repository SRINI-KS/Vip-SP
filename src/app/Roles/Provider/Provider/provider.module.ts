import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { PnavBarComponent } from '../Components/pnav-bar/pnav-bar.component';
import { CustomerRequestComponent } from '../Components/customer-request/customer-request.component';
import { ProviderComponent } from './provider.component';
import { MaterialDesignModule } from 'src/app/Modules/MaterialDesign/material-design/material-design.module';
import { SharedModule } from 'src/app/Modules/shared/shared.module';


@NgModule({
  declarations: [
    ProviderComponent,
    CustomerRequestComponent,
    PnavBarComponent,
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    MaterialDesignModule,
    SharedModule,
  ],
bootstrap:[ProviderComponent]
})
export class ProviderModule { }
