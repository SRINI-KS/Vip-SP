import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router) {}

  setToken(token: any) {
    localStorage.setItem('Token', token);
  }
  setUsername(token: any) {
    localStorage.setItem('Username', token);
  }
  setRole(token: any) {
    localStorage.setItem('Role', token);
  }

  logOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Username');
    localStorage.removeItem('Role');
    this.router.navigate(['home']);
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  isLogin() {
    return this.getToken() != null;
  }

  isUser() {
    let role: string;
    role = String(localStorage.getItem('Role'));
    console.log(role);
    if (role == 'CUSTOMER') {
      return true;
    } else {
      return false;
    }
  }
  isProvider() {
    let role: string;
    role = String(localStorage.getItem('Role'));
    if (role == 'PROVIDER') {
      return true;
    } else {
      return false;
    }
  }
  getUserName(){
    return localStorage.getItem('Username')
  }
}
