import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username: any;


  constructor(public jwtAuthService: JwtAuthService) {
  }

  ngOnInit(): void {
  }

  getUserName() {
    return this.jwtAuthService.getUsername();
  }

}
