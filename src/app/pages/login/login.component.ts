import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading = false;
  contentDisplay = false;
  loaderDisplay = true;
  user : User = {email : '', password : ''};
  invalidPass = false;
  errorMessage: string = "Check your username or password";
  btn = document.getElementById('btn');
  token : string;


  constructor(private router: Router,
    public loginService : LoginService,
    private jwtService: JwtAuthService) {

  }

  handleLogin() {
    this.loading = true
    return this.loginService.logUserIn(this.user).subscribe(
      (data : any) => {
        console.log('login success')
        this.router.navigate(['home'])
        this.jwtService.setJwtToken(data.token);
        this.jwtService.setUsername(data.username);
        this.loading = false;
      },
      (error : any) => {
        this.loading = false;
        this.invalidPass = true;
        setTimeout(() => {
          this.invalidPass = false;
        }, 3000);
      }
    )
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

  }


  export class User { 
    email : string;
    password: string;
  }
