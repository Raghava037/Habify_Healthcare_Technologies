import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'Home',component:HomePageComponent},
  {path:'data',component:DataComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
