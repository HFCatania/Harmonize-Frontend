import { Injectable } from '@angular/core';
import { User } from '../Model/user'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  loggedIn: boolean;
  baseUrl = environment.baseURL; 


  constructor(private http: HttpClient) {
    // this.loggedIn = false; 
   }

  //  getUser(): User{
  //    return this.currentUser;
  //  }
   setUser(user: User){
     this,this.currentUser = user;
    //  this.loggedIn = true; 
   }

   
}
