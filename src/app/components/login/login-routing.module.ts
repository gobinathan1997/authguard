import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanGuard } from '../gaurds/can.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsernameComponent } from './username/username.component';


const routes: Routes = [
  {
   path:'username',
   
   component:UsernameComponent,
  },
  {
      path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
