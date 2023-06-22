import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyRequestService {

  url=environment.apiUrl

  constructor(private http:HttpClient) { }

requestAll(){
 return this.http.get(`${this.url}api/v1/getMyRequest`)
}

}
