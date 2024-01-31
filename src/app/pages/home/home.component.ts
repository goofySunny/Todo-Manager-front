import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = '';



  constructor (private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.name = (this.route.snapshot.params['name'])
  }
}