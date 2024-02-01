import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {



  authenticate(username : string, password: string) {
    if (username === "18Kay" && password==="18Kay") {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
}
