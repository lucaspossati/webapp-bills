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
    this.token = JSON.parse(localStorage.getItem('auth_app_token')).value;

    if(this.token !== null){
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