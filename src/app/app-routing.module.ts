import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { LoginComponent } from './Components/Auth/Login/login/login.component';
import { RegisterComponent } from './Components/Auth/Register/register/register.component';
import { CommanDashBoardComponent } from './Components/comman-dashboard/comman-dash-board.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CommanDashBoardComponent, 
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'provider',
    loadChildren: () =>
      import('./Roles/Provider/Provider/provider/provider.module').then((m) => m.ProviderModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Roles/User/User/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
