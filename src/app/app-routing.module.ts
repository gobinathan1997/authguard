import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/gaurds/auth.guard';
import { CanGuard } from './components/gaurds/can.guard';
import { GobiComponent } from './components/gobi/gobi.component';


const routes: Routes = [
  {
    path:'login' ,
    canLoad:[CanGuard],
    loadChildren:() => import('./components/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'gobi',
    component:GobiComponent ,canActivate:[AuthGuard]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
