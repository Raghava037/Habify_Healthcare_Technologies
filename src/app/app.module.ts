import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataComponent } from './data/data.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    IndexComponent,
    DataComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatSelectModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
