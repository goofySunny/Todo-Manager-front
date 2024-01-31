import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "18Kay";
  password: string = "";
  invalidPass = false;
  errorMessage: string = "Check your username or password"


  constructor(private router: Router) {

  }

  ngOnInit(): void {
      
  }

  handleLogin() : void {
    if (this.username === "18Kay" && this.password === "18Kay") {
      //navigate to home page
      this.router.navigate(['home', this.username])
    } else {
      this.invalidPass = true;
    }
  }
}
