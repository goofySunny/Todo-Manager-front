import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "18Kay";
  password: string = "";


  constructor() {

  }

  ngOnInit(): void {
      
  }

  handleLogin() : void {
    console.log(this.username)
  }
}
