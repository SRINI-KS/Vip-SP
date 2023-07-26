import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl


  requestAll() {
    return this.http.get(`${this.url}api/v1/getAllRequest`)
  }
}
