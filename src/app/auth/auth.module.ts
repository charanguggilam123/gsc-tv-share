import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';

const authRoutes : Routes=[
  {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(authRoutes)
  ],exports:[
    RouterModule
  ]
})
export class AuthModule { }
