import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { UserQueryComponent } from '../Components/user-query/user-query.component';

const routes: Routes = [
  {
    path:'',component:ProviderComponent,children:[
      {
        path:'querylist',component:UserQueryComponent
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
