import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthService } from '../JwtAuth/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService { 

  constructor(private jwtService: JwtAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = this.jwtService.getJwtToken();

    if (token) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    } 
    return next.handle(req)
  }


}
