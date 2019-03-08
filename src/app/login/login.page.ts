import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { login } from '../classes/login';
import { loginbyemail } from '../classes/loginByEmail';
import { LogoutService } from '../services/logout.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_name: string;
  user_email: string;
  user_password: string;
  flag=0;
  constructor(private _login:LoginServiceService,private _route:Router,private _logout:LogoutService) { }

  ngOnInit() {
  }
  login(){
    this._login.loginByEmail(new login(this.user_email,this.user_password)).subscribe(
      (data:any)=>{
        if(data.length==1)
        {
        localStorage.setItem('user_email',this.user_email);
        alert("Login success");
        this._logout.flag=true;
        //this.flag=1;
        this._route.navigate(['productpage']);
        }
        else{
          alert("Please enter valid username and password");
        }
        // user email id login
        // else {
        //   this.user_email=this.user_name;
        //               this._login.loginByEmail(new loginbyemail(this.user_email,this.user_password)).subscribe(
        //                 (data:any)=>{
        //                   if(data.length==1){
        //                           localStorage.setItem('user_email',this.user_email);
        //                           alert("Login success");
        //                           this.flag=1;
        //                           this._route.navigate(['/']);
        //                   }
        //                 else
        //                 {
        //                     console.log("wrong");
        //                     alert("Username or Password mismatch");
        //                 }
        //               }
        //             );
        //   }
         }
    );
  }

  signup_navigate(){
    this._route.navigate(['signup']);
  }


}
