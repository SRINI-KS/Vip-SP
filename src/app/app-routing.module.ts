import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { LoginComponent } from './Components/Auth/Login/login/login.component';
import { RegisterComponent } from './Components/Auth/Register/register/register.component';
import { ProviderGuard } from './Guards/ProviderGuard/provider.guard';
import { UserGuard } from './Guards/UserGuard/user.guard';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
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
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'provider',
    canActivate:[ProviderGuard],
    loadChildren: () =>
      import('./Roles/Provider/Provider/provider.module').then((m) => m.ProviderModule),
  },
  {
    path: 'user',
    canActivate:[UserGuard],
    loadChildren: () =>
      import('./Roles/User/User/user.module').then((m) => m.UserModule),
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
