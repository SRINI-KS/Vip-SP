import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }

  registerUser(data:any){

     return this.http.post(`${environment.apiUrl}api/v1/auth/register`,data);
  }
}
