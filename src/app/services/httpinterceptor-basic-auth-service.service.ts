import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthBean, BasicAuthenticationService } from './hardCodedAuth/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptorBasicAuthServiceService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user';
    // let password = 'pass';
    // let basicHeaders = 'Basic ' + window.btoa(username + ':' + password);

    let token = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (token && username) {

      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(req)
  }


}
