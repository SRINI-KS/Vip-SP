import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/Login/login/login.component';
import { RegisterComponent } from './Components/Auth/Register/register/register.component';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './Modules/MaterialDesign/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { JwtInterceptor } from './Interceptor/Jwt/jwt.interceptor';
import { DialogComponent } from './Roles/Provider/Components/dialog/dialog.component';
import { ProviderDetailsComponent } from './Roles/Provider/Components/provider-details/provider-details.component';
import { UserDetailsComponent } from './Roles/User/Components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    DialogComponent,
    ProviderDetailsComponent,
    UserDetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
