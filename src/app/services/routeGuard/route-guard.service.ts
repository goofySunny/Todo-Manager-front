import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../JwtAuth/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {




  constructor(private router: Router, private jwtAuthService : JwtAuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtAuthService.isUserLoggedIn()) {  
    return true
    } else {
      this.router.navigate(['/login']) 
      return false;
    }
  }

}
