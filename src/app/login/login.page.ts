import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { login } from '../classes/login';
import { LogoutService } from '../services/logout.service';
import { ToastController } from '@ionic/angular';


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
  constructor(private _login:LoginServiceService,private _route:Router,private _logout:LogoutService,public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  forgotpassword(){
    this._route.navigate(['forgot-password']);
  }
  login(){
    this._login.loginByEmail(new login(this.user_email,this.user_password)).subscribe(
      (data:any)=>{
        if(data.length==1)
        {
        localStorage.setItem('user_email',this.user_email);
        // alert("Login success");
          this.presentToast();
        


        this._logout.flag=true;
        //this.flag=1;
        this._route.navigate(['productpage',1001]);
        }
        else{
          alert("Please enter valid username and password");
        }
    }
    );
  }

  signup_navigate(){
    this._route.navigate(['signup']);
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Login Successful.",
      cssClass: "toast-scheme ",
      showCloseButton: true,
      // closeButtonText: "OK",
      position: 'bottom'
    });
    toast.present();
  }
}
