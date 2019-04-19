import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { user } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  user_email:string;
  user_password:string;
  user_name:string;
  user_mobileno:number;
  user_city:string;
  user_gender:string;
  user_address:string;

  password_flag=true;
  constructor(public toastCtrl:ToastController,private _user:UserService,private _route:Router) { }

  ngOnInit() {
    this.user_email=localStorage.getItem("user_email");
    this._user.myprofile(this.user_email).subscribe(
      (data:any)=>{
        this.user_email=data[0].user_email;
        this.user_password=data[0].user_password
        this.user_name=data[0].user_name;
        this.user_mobileno=data[0].user_mobileno;
        this.user_city=data[0].user_city;
        this.user_gender=data[0].user_gender;
        this.user_address=data[0].user_address;
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
  upadteprofile(){
    this._user.updateProfile(new user(this.user_email,
      this.user_password,
      this.user_name,
      this.user_mobileno,
      this.user_city,
      this.user_gender,
      this.user_address)).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
      this._route.navigate(['/home']);
  }
  
}
