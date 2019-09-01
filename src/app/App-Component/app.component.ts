import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  title = 'Harmonize';
  currentUser: User; 
  userService: UserService; 

  logOut(){
    this.currentUser = null;
    this.userService.userLogout();
  }
//   loggedIn: boolean;
//   currentUser: User; 
//   dropdownList = [];
//   selectedItems = [];
//   dropdownSettings = {};
  
//   constructor(public userServiece: UserService){}

//   ngOnInit(){
//     this.loggedIn = this.userServiece.loggedIn
    
      
    
//     this.selectedItems = [
//     ];
//     this.dropdownSettings = {
//       singleSelection: false,
//       idField: 'item_id',
//       textField: 'item_text',
//       selectAllText: 'Select All',
//       unSelectAllText: 'UnSelect All',
//       itemsShowLimit: 5,
//       // allowSearchFilter: true
//     };
//   }

//   onItemSelect(item: any) {
//     console.log(item);
//   }
//   onSelectAll(items: any) {
//     console.log(items);
//   }
}
