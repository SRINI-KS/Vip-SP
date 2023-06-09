import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Services/auth-service.service';


export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthServiceService) {} 
 token=this.authService.getToken()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': `Barear `,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' ,
      }
    });

    return next.handle(req);
  }


}
