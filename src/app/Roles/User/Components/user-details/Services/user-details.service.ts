import { Injectable } from '@angular/core';
import { UserDetails } from '../UserDetails';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private router: Router, private http: HttpClient) {}
  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };
  updateCustomerDetails(data: UserDetails) {
    return this.http.put(`${environment.apiUrl}api/v1/updateCustomerDetails`, data);
  }

}
