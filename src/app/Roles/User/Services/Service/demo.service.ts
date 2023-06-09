import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  url=environment.apiUrl
  constructor(private http:HttpClient,private authService:AuthServiceService) { }
token=this.authService.getToken()
  
  getData(){

   
    // const headers:HttpHeaders = new{ Authorization: `Bearer ${this.token}` }
    const headers:HttpHeaders=new HttpHeaders({Authorization:"dfslkhfklsa",
    'Content-Type': 'application/json'
    })
   let options = { headers: headers };

    // const headers=new HttpHeaders(Headers,"dfslkhfklsa")
    
    console.log(headers.get('Authorization'))
    return this.http.post(`http://localhost:8080/api/v1/demo`,null, options);
  }

  // getData(){
  //   return this.http.get(`${this.url}api/v1/demo`);

  // }

}
