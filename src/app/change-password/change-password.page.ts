import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { password } from '../classes/password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {


  user_email:string;
  user_password:string;
  user_OldPassword:string;
  user_NewPassword:string;
  user_ConfirmPassword:string;
  password_flag=true;
  password_flag1=true;
  password_flag2=true;

  constructor(public toastCtrl:ToastController,private _user:UserService,private _route:Router) { }

  ngOnInit() {
    this.user_email=localStorage.getItem("user_email");
    this._user.myprofile(this.user_email).subscribe(
      (data:any)=>{
        this.user_email=data[0].user_email;
        this.user_OldPassword=data[0].user_password
      }
    );
  }
  onpassword_flag(){
    
    if(this.password_flag==true){
      this.password_flag=false;
      this.ngOnInit();
    }
    else if(this.password_flag==false){
      this.password_flag=true;
      this.ngOnInit();
    }
  }

  onpassword_flag1(){
    
    if(this.password_flag1==true){
      this.password_flag1=false;
      this.ngOnInit();
    }
    else if(this.password_flag1==false){
      this.password_flag1=true;
      this.ngOnInit();
    }
  }

  onpassword_flag2(){
    
    if(this.password_flag2==true){
      this.password_flag2=false;
      this.ngOnInit();
    }
    else if(this.password_flag2==false){
      this.password_flag2=true;
      this.ngOnInit();
    }
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      cssClass: "toast-scheme ",
      showCloseButton: true,
      position: 'bottom'
    });
    toast.present();
  }
  upadtepassword(){
      if(this.user_OldPassword==this.user_password){
          if(this.user_NewPassword==this.user_ConfirmPassword){
            this._user.updatePassword(new password(this.user_email,this.user_ConfirmPassword)).subscribe(
              (data:any)=>{
                // console.log(data);
                this.presentToast("Password Updated.");
              }
            );
          }
          else{
            this.presentToast("Password not matched.");
          }
      }
      else{
        this.presentToast("Invalid Old Password");
      }
  }

}
