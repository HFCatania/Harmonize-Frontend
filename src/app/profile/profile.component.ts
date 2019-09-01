import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Profile } from '../Model/profile'; 
import { ProfileService } from '../Services/profile.service'; 


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  
  private user: User; 
  private currentUser: User;
  
  @Input() profile: Profile; 
  private show: boolean; 
  

  constructor(private userService: UserService,
              private route: ActivatedRoute,) {
              this.profile = new Profile(); 
              this.show = false; 
              }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getProfile();
  }

  getProfile(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(currentUser => {
    this.user = currentUser;
    this.profile = this.user.profile;

    if (this.currentUser.id === this.user.id){
      this.show = true;
    }

    });
  }

}
