import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class WelcomeData {
  constructor(public message: string) {};
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }



  testConnectivity() {
    return this.http.get<WelcomeData>('http://localhost:8080/hello');
    //console.log('meower')
  }

  testConnectivityWithPathVariable(name:string) {
    return this.http.get<WelcomeData>(`http://localhost:8080/hello/${name}`);
    //console.log('meower')
  }
}
