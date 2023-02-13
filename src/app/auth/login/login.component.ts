import { Component, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm')loginFormEle!: NgForm

  onSubmit(){
    console.log(this.loginFormEle.value);
    

  }

  clear(){
    // this.username ="";
    // this.password = "";
    this.loginFormEle.reset()
    }
}
