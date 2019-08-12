import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  
  private user: User; 
  private currentUser: User;
  // @Input() profile: UserProfile; 
  private show: boolean; 

  constructor(private userService: UserService,
              private route: ActivatedRoute) {

              }

  ngOnInit() {
  }

}
