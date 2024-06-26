import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeData, WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentDisplay = false;
  loaderDisplay = true;
  name = '';
  message: string = '';
  errorTitle: string = '';
  errorDesc: string = '';



  constructor (private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }

  ngOnInit(): void {
    this.name = (this.route.snapshot.params['name'])
    setTimeout(() => {
      this.loaderDisplay = false;
      this.contentDisplay = true;
    }, 1000);
  }


  testConnect() {
    // console.log(this.service.testConnectivity());
    this.service.testConnectivityWithPathVariable().subscribe(
      response => this.handleSuccessfulTestConnect(response));
  }

  testConnectWithPathVariable(name:string) {
    name = this.name;
    // console.log(this.service.testConnectivityWithPathVariable(name));
    this.service.testConnectivityWithPathVariable().subscribe(
      response => this.handleSuccessfulTestConnect(response));
  }

  handleSuccessfulTestConnect(response: WelcomeData) {
    this.message = response.message;
  }
  handleErrorTestConnect(error : any) {
    this.errorTitle = error.error.error;
    this.errorDesc = error.error.message;
  }


}
