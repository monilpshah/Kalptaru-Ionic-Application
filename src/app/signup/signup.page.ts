import { Component, OnInit } from '@angular/core';
import { signup } from '../classes/signup';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private _route:Router,private _signupservice:SignupService) { }

  user_email :string;
  user_password :string;
  user_confirm_password: string;
  user_name :string;
  user_mobileno :number;
  user_city: string;
  user_gender:string;
  user_address :string;

  signuparr:signup[]=[];

  ngOnInit() {

  }
  signup(){
    this._signupservice.signupaddrecord(new signup(this.user_email,this.user_name,this.user_password,this.user_mobileno,this.user_city,this.user_gender,this.user_address)).subscribe(
      (data:any)=>{
        alert("record added successfully");
        this._route.navigate(['']);
      }
    );
  }
  login_navigate(){
    this._route.navigate(['']);
  }

}
