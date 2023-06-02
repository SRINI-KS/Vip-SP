import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }

  setToken(token:any){
    sessionStorage.setItem('Token',token);
  }
  setUsername(token:any){
    sessionStorage.setItem('Username',token);
  }
  setRole(token:any){
    sessionStorage.setItem('Role',token);
  }

  logOut(){
 sessionStorage.removeItem('Token');
 this.router.navigate(['login']);

  }

  getToken(){
    return sessionStorage.getItem('Token')
  }

  isLogin(){
    return this.getToken() != null;
  }

  isUser(){
    let role:string;
    role=String(sessionStorage.getItem('Role'))
    console.log(role)
    if(role=='CUSTOMER'){
      return true
    }
    else{
      return false
    }
    

  }
  isProvider(){
    let role:string;
    role=String(sessionStorage.getItem('Role'))
    if(role=='PROVIDER'){
      return true
    }
    else{
      return false
    }

  }

}
