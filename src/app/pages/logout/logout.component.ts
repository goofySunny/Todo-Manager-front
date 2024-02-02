import { Component, OnInit } from '@angular/core';
import { HardCodedAuthService } from 'src/app/services/hardCodedAuth/hard-coded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuth : HardCodedAuthService) {}

  ngOnInit(): void {
      this.hardCodedAuth.logOutUser();
  }
}
