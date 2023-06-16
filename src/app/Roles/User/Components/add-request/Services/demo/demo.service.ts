import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }
  url=environment.apiUrl

  demo(){
    // let api_key = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTUkkxMjNAZ21haWwuY29tIiwiaWF0IjoxNjg2NTczNDkyLCJleHAiOjMzNzMxNDY5ODR9.oe81WLpKND7PoSf-BNh7f9yWw7FFdUdmdW-89SnW63U";
    // const headers = new HttpHeaders({
    //     'Authorization': `Bearer ${api_key}`
    //   });

    // const requestOptions = { headers: headers };

   return this.http.get(`${this.url}api/v1/demo`)
        
  }
}
