import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {


  getJwtToken() {
    let token = sessionStorage.getItem('token');
    if (token) {
      return token;
    } else {
      return null;
    }
    
  }

  setJwtToken(token : string) {
    sessionStorage.setItem('token', token);
  }

  isUserLoggedIn() {
    let authenticatedUser = sessionStorage.getItem('token')
    if (authenticatedUser) {
      return true;
    } else {
      return false;
    }
  }

  logOutUser() {
    sessionStorage.removeItem('token');
    this.isUserLoggedIn();
  }
}

