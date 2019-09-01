import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Profile } from '../Model/profile';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/Services/auth.service'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string; 
  public currentUser: User;
  private profile: Profile; 
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient, private router: Router, private userService: UserService,
              private authService: AuthService) {
    this.url = this.baseUrl+ '/profiles';
   }

   getProfile(){
     return this.http.get<Profile>(this.url + '/' + this.currentUser.id)
   }

   editProfile(profile: Profile, id: number){
     this.http.put<Profile>(this.url + '/' + id, Profile).subscribe(); 
   }

   findAllProfiles(type:String){
     return this.http.get<Profile[]>(this.url + '/profiles');
   }
}
