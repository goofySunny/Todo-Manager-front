import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';
import { BasicAuthenticationService } from 'src/app/services/hardCodedAuth/basic-auth.service';
import { HardCodedAuthService } from 'src/app/services/hardCodedAuth/hard-coded-auth.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  contentDisplay = false;
  loaderDisplay = true;
  user : User = {email : '', password : ''};
  invalidPass = false;
  errorMessage: string = "Check your username or password";
  btn = document.getElementById('btn');
  token : string;


  constructor(private router: Router,
    private hardCodedAuthService: HardCodedAuthService,
    private basicAuthService: BasicAuthenticationService,
    public loginService : LoginService,
    private jwtService: JwtAuthService) {

  }

  handleLogin() {
    return this.loginService.logUserIn(this.user).subscribe(
      (data : any) => {
        console.log('login success')
        this.router.navigate(['home'])
        this.jwtService.setJwtToken(data.token);
        this.jwtService.setUsername(data.username);

      })
  }
  loadContent() {
    document.getElementById("contentContainer")!.style.display = "block";
    document.getElementById("loader")!.style.display = "none";
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.contentDisplay = true;
      this.loaderDisplay = false;
    }, 0);
  }

  ngOnDestroy(): void {
      
  }


  // ===================================================================
  // This Part is useless prolly will be deleted soon

  // handleLogin(): void {
  //   if (this.hardCodedAuthService.authenticate(this.username, this.password)) {
  //     this.router.navigate(['home', this.username]);
  //   } else {
  //     this.invalidPass = true;
  //   }
  // }



  // handleBasicAuthLogin(): void {
  //   this.basicAuthService.executeBasicAuth(this.username, this.password)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['home', this.username]);
  //         console.log(data)
  //       },
  //       error => this.invalidPass = true
  //     )

    // if (this.username === "18Kay" && this.password === "18Kay") {
    //   //navigate to home page
    //   this.router.navigate(['home', this.username])
    // } else {
    //   this.invalidPass = true;
    // }

    // This Part is useless prolly will be deleted soon  
    // ===================================================================
      


  }


  export class User { 
    email : string;
    password: string;
  }
