import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {


  constructor() { }


  authenticate(username : string, password: string) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === "18Kay" && password==="18Kay") {
      sessionStorage.setItem('authenticated user', username);
      console.log('after ' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn () {
    let authenticatedUser = sessionStorage.getItem('authenticated user')
    if (authenticatedUser) {
      return true;
    } else {
      return false;
    }
  }

  logOutUser() {
    sessionStorage.removeItem('authenticated user');
  }
}
