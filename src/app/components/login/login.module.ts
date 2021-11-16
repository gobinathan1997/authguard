import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './username/username.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    UsernameComponent,
    LoginComponent,
    SignupComponent
  
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
