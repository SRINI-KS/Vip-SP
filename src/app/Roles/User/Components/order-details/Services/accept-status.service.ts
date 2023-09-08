import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../../user-details/UserDetails';

@Injectable({
  providedIn: 'root'
})

export class AcceptStatusService {




  constructor(private router: Router, private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  updateCustomerDetails(requestId: number, status: string) {
    return this.http.put(`${environment.apiUrl}api/v1/updateCustomerApproval/${requestId}`, status, this.httpOptions);
  }
}
