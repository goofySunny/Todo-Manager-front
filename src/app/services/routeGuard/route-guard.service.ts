import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardCodedAuthService } from '../hardCodedAuth/hard-coded-auth.service';
import { JwtAuthService } from '../JwtAuth/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {




  constructor(private hardCodeAuth: HardCodedAuthService,
    private router: Router,
    private jwtAuthService : JwtAuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtAuthService.isUserLoggedIn()) {  
    return true
    } else {
      this.router.navigate(['/login']) 
      return false;
    }
  }

}
