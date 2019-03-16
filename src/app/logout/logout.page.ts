import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private _route:Router,public toastCtrl:ToastController) { }

  ngOnInit() {
    localStorage.setItem('user_email',"");
    console.log('in logout');
    this._route.navigate(["/login"]);
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
