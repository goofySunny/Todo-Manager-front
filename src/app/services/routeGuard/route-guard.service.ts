import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardCodedAuthService } from '../hardCodedAuth/hard-coded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {




  constructor(private hardCodeAuth: HardCodedAuthService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.hardCodeAuth.isUserLoggedIn()) {  
    return true
    } else {
      this.router.navigate(['/login']) 
      return false;
    }
  }

}
