import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AcceptModel } from '../AcceptModel';

@Injectable({
  providedIn: 'root'
})
export class RequestAcceptService {

  constructor(private router: Router, private http: HttpClient) {}
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  requestAccept(requestId:number,data: AcceptModel) {
    return this.http.put(`${environment.apiUrl}api/v1/requestAccept/${requestId}`, data,this.httpOptions);
  }
  
}
