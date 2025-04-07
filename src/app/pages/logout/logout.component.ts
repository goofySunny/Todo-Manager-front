import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private jwtAuthService: JwtAuthService) {}

  ngOnInit(): void {
      this.jwtAuthService.logOutUser();
  }
}
