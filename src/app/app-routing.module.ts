import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent} from './create-user/create-user.component';
import { LoginComponent } from './login/login.component'; 

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'createUser', component: CreateUserComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
