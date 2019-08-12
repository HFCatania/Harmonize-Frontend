import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  welcome = 'Welcome to Harmonize, a project currently being developed by Henry Catania'
  mission = 'Our mission is to connect local musicians of all skill levels and backgrounds and to facilitate creative collaboration between them.'

  ngOnInit() {
  }

}
