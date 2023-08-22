import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=this.authService.getToken();
    const isLoggedIn:boolean=this.authService.isLogin()
    const isApiUrl:boolean=request.url.startsWith(environment.apiUrl);
    if(isLoggedIn ){

      request=request.clone({
        setHeaders:{ Authorization: `Bearer ${token}`},
      })
    }
    return next.handle(request);
  }
}
