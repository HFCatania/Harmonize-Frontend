import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Profile } from '../Model/profile';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string; 
  public currentUser: User;
  private profile: Profile; 

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {

   }
}
