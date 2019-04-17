import { Component, OnInit } from '@angular/core';
import { signup } from '../classes/signup';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private _route:Router,private _signupservice:SignupService,public toastCtrl:ToastController) { }

  user_email :string;
  user_password :string;
  user_confirm_password: string;
  user_name :string;
  user_mobileno :number=0;
  user_city: string;
  user_gender:string="Male";
  user_address :string;

  signuparr:signup[]=[];

  ngOnInit() {

  }
  ionchange(){
    if(this.user_email == ""){
      this.presentToast("Please fill email");
    }
    else if(this.user_name= ""){
      this.presentToast("Please fill Name");
    }
    else if(this.user_mobileno = 0){
      this.presentToast("please fill mobile number");
    }
    else if(this.user_city = ""){
      this.presentToast("please fill city");
    }
    else if(this.user_address = ""){
      this.presentToast("please fill address");
    }
  }
  signup(){
    if(this.user_email == ""){
      this.presentToast("Please fill email");
    }
    else if(this.user_name= ""){
      this.presentToast("Please fill Name");
    }
    else if(this.user_mobileno = 0){
      this.presentToast("please fill mobile number");
    }
    else if(this.user_city = ""){
      this.presentToast("please fill city");
    }
    else if(this.user_address = ""){
      this.presentToast("please fill address");
    }
    else{

    
    this._signupservice.signupaddrecord(new signup(this.user_email,this.user_name,this.user_password,this.user_mobileno,this.user_city,this.user_gender,this.user_address)).subscribe(
      (data:any)=>{
        console.log(data);
        alert("record added successfully");
        this._route.navigate(['']);
      }
    );
  }
  }
  login_navigate(){
    this._route.navigate(['']);
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      cssClass: "toast-scheme ",
      showCloseButton: true,
      // closeButtonText: "OK",
      position: 'bottom'
    });
    toast.present();
  }
}
