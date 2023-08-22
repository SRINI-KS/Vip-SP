import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { CustomerRequestComponent } from '../Components/customer-request/customer-request.component';
import { PAcceptComponent } from '../Components/p-accept/p-accept.component';
import { DialogComponent } from '../Components/dialog/dialog.component';
import { ProviderDetailsComponent } from '../Components/provider-details/provider-details.component';

const routes: Routes = [
  {
    path:'',component:ProviderComponent,children:[
      {
        path:'querylist',component:CustomerRequestComponent
      },
      {
        path:'accept',component:PAcceptComponent
      },
      {
        path:'profile',component:ProviderDetailsComponent
      },
      
    
      {
        path:'',redirectTo:'/provider/querylist',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
