import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerUser: RegisterUser = new RegisterUser;
  repeatedPassword: string;
  registerMessage: string;
  repeatedWrong: boolean = false;


  constructor(
    private loginService : LoginService,
    private jwtService: JwtAuthService,
    private router: Router
  ) {}

  registerHandler() {
    if (this.repeatedPassword == this.registerUser.password) {
      this.loginService.registerUser(this.registerUser).subscribe(
        (data: any) => {
          console.log(data)
          this.registerMessage = 'Success!'
          this.jwtService.setJwtToken(data.token)
          this.jwtService.setUsername(data.username)
          setTimeout(() => {
            this.router.navigate(['home'])
          }, 2000);
        }
      )
      
    } else {
      this.repeatedWrong = true;
    }
  }

}


export class RegisterUser {
  name : string;
  username: string;
  email: string;
  password: string;
  constructor() {}
}