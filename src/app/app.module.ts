import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { GobiComponent } from './components/gobi/gobi.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [AppComponent, GobiComponent, ReactiveFormComponent,],
  imports: [BrowserModule, AppRoutingModule,LoginModule,ReactiveFormsModule,FormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
