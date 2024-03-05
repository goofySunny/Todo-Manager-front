import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(private http: HttpClient) { }


  executeBasicAuth(username: string, password: string) {

    let basicHeaders = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicHeaders
    })

    return this.http.get<BasicAuthBean>(`${API_URL}/basicAuth`, {headers}).pipe(map(
        data => {
          sessionStorage.setItem('authenticated user', username);
          sessionStorage.setItem('authToken', basicHeaders);
        }
      ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticated user')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem('authToken')
    } else {
      return null
    }
  }

  isUserLoggedIn() {
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


export class  BasicAuthBean {
  constructor(
    public message: string
  ) { }
}
