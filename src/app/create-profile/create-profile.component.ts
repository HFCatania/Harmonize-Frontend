import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { Profile } from 'selenium-webdriver/firefox';
import { UserService } from '../Services/user.service';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.sass']
})
export class CreateProfileComponent implements OnInit {

  user: User; 
  currentUser: User; 
  @Input() profile: Profile;
  show: boolean;

  constructor(private userService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute) {
                this.profile = new Profile();
                this.show = false; 
               }

  ngOnInit(): void {
  
  }

  getProfile(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(currentUser => {
      this.user = currentUser; 
      this.profile
    })
  }

}
