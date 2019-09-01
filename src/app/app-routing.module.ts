import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent} from './create-user/create-user.component';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'profile', component: ProfileComponent},
  {path: 'createProfile', component: CreateProfileComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
