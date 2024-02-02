import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthService } from 'src/app/services/hardCodedAuth/hard-coded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "18Kay";
  password: string = "";
  invalidPass = false;
  errorMessage: string = "Check your username or password";
  btn = document.getElementById('btn')


  constructor(private router: Router,
    private hardCodedAuthService: HardCodedAuthService) {

  }

  ngOnInit(): void {
    
  }

  handleLogin() : void {
    if (this.hardCodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['home', this.username])
    } else {
      this.invalidPass = true;
    }
    // if (this.username === "18Kay" && this.password === "18Kay") {
    //   //navigate to home page
    //   this.router.navigate(['home', this.username])
    // } else {
    //   this.invalidPass = true;
    // }
  }
}
