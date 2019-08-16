import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  @Input()
  email: string; 

  @Input()
  password: string;

  authService: AuthService;
  tokenService: TokenService;
  cookieService: CookieService;


  constructor(authService: AuthService, 
              tokenService: TokenService, 
              cookieService: CookieService, 
              private http: HttpClient,
              private router: Router
              ) {
                this.authService = authService;
                this.tokenService = tokenService; 
                this.cookieService = cookieService;
              }
   

  ngOnInit() {
    this.cookieService.check('token');
    this.tokenService.token = this.cookieService.get('token'); 
  }

  logIn(){
    this.authService.logIn(this.email, this.password).subscribe(jwt => {
      this.tokenService.token = jwt; 
      this.cookieService.set('token', this.tokenService.token);
      this.router.navigate(['home'])
    }); 
  }

}
