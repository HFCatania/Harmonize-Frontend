import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  public user: User = new User();
  public currentUser = User; 

  constructor(private service: UserService,
              private http: HttpClient,
              private router: Router
              ) {}
   

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
  }

  onSubmit(){
    this.service.loggedIn
  }

}
