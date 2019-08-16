import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public authUrl: string;
  public newUserUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.authUrl = environment.baseURL + 'login'; 
    this.newUserUrl = environment.baseURL + 'register';
   }

   createUser(user: User): Observable<string> {
    return this.http.post(this.newUserUrl, user, {responseType: 'text'}); 
  }

  logIn(email: string, password: string): Observable<string> {
    return this.http.post(this.authUrl, {}, {
      params: {email, password}, 
      responseType: 'text'
    })
  }

  
}
