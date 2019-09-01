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

   getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.baseUrl + '/users/${id}'); 
  }

  userLogout(){
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    location.reload();
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
