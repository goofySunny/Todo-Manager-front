import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { User } from 'src/app/pages/login/login.component';
import { RegisterUser } from 'src/app/pages/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  logUserIn(user : User) {
    return this.http.post(`${API_URL}/api/v1/auth/authenticate`, user);
  }

  registerUser(user : RegisterUser) {
    return this.http.post(`${API_URL}/api/v1/auth/register`, user);
  }
}
