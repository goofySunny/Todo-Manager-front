import { Component, OnInit } from '@angular/core';
import { HardCodedAuthService } from 'src/app/services/hardCodedAuth/hard-coded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isUserIn : boolean = this.hardCodeAuth.isUserLoggedIn();

  constructor(public hardCodeAuth: HardCodedAuthService) {
  }

  ngOnInit(): void {
      console.log(this.hardCodeAuth.isUserLoggedIn())
  }

}
