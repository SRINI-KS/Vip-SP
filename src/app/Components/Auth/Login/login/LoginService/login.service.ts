import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.apiUrl;
  constructor(private http: HttpClient,
    ) {}

  loginUser(login: any) {
  return this.http.post(`${this.url}api/v1/auth/authenticate`, login);
  }
}
