import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment'; 
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = environment.baseURL + '/users'
  }

  login(user: User){
    return this.http.put<User>(this.url + '/login', user)
  }
}
