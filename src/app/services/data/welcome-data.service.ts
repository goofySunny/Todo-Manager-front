import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class WelcomeData {
  constructor(public message: string) {};
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }



  testConnectivity() {
    return this.http.get<WelcomeData>(`${API_URL}/hello`);
    //console.log('meower')
  }

  testConnectivityWithPathVariable(name:string) {
    let basicHeaderAuth = this.createHeader();
    let headers = new HttpHeaders({
      Authorization: basicHeaderAuth
    })

    return this.http.get<WelcomeData>(`${API_URL}/hello/${name}`,
    {headers});
  }

  createHeader() {
    let username = 'user';
    let password = 'pass';
    let basicHeaders = 'Basic ' + window.btoa(username + ':' + password);
    return basicHeaders;
  }


}
