import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Model/user'; 
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from 'src/app/Services/token.service'
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
  @Input('loginStatus') loggedIn: boolean; 
  private instrumentsURL = environment + '/api/instruments'
  
  user: User;  

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
    ){ this.user = new User() };
     
  ngOnInit() {
  }
  
  onSubmit(){
    this.authService.createUser(this.user).subscribe(jwt => this.tokenService.token = jwt); 

  }
   

  
  
}

// createUser(): void {
  //   let emailstring: string = (document.getElementById('email') as HTMLInputElement).value;
  //   const password: string = (document.getElementById('password') as HTMLInputElement).value;
  //   const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
  //   const lastName: string = (document.getElementById('lastName') as HTMLInputElement).value;
  //   const city: string = (document.getElementById('city') as HTMLInputElement).value;
  //   const state: string = (document.getElementById('state') as HTMLInputElement).value; 
  //   const country: string = (document.getElementById('country') as HTMLInputElement).value; 
  //   this.user = {
  //     id: '',
  //     email: emailstring,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName,
  //     city: city,
  //     state: state, 
  //     country: country
  //   };
    
  //   this.userService.createUser(this.user).subscribe(newUser => this.userService.setUser(newUser));
// instrument: Instrument; 
  // genre: Genre; 
  // userForm: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   city: new FormControl(''),
  //   state: new FormControl(''),
  //   country: new FormControl(''),
  //   instruments: this.fb.group({instruments: this.fb.array([this.makeCheckBoxes])}),
  //   genres: this.fb.array([this.makeCheckBoxes])
  // });
   
  // instrumentCheckForm: FormGroup;
  // genreCheckForm: FormGroup; 

  // instrumentArr: Instrument[];
  // genreArr: Genre[]; 

  // get instruments(): FormArray {
  //   return <FormArray>this.userForm.get('intruments');
  // }

   // makeCheckBoxes(): FormGroup{
  //   return this.fb.group({
  //     instruments: this.getAllInstruments, 
  //     instrumentCheck: false 
  //   })
  // }

//   getAllInstruments(){
//    return this.instrumentService.getAllInstruments().subscribe(instrument => {this.instrumentArr = instrument})
//  }

//   getAllGenres(){
//     return this.genreService.getAllGenres().subscribe(genre => {this.genreArr = genre})
//   }

//   getSelectedInstruments(){
    
//   }