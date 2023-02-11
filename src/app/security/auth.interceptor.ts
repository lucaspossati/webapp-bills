import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  token : string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const objWithToken = JSON.parse(localStorage.getItem('auth_app_token'));

    if(objWithToken != null){
      this.token = objWithToken.value;

      const authRequest= req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`
          }
      });

      return next.handle(authRequest);
      
    }

    return next.handle(req);
    
  }
}