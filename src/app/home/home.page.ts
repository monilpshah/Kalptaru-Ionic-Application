import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public toastCtrl:ToastController,private _route:Router){}
  ngOnInit() {
    
    //localStorage.setItem("user_email",null);
    
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
  firstSlides(){
    this._route.navigate(['productpage',1001]);
  }
  kalpataruspecial(){
    this._route.navigate(['productpage',1001]);
  }
  bedsandchairs(){
    this._route.navigate(['productpage',113]);
  }
  sofaandtables(){
    this._route.navigate(['productpage',104]);
  }
  beds(){
    this._route.navigate(['productpage',113]);
  }
  chairs(){
    this._route.navigate(['productpage',106]);
  }
  chairandsofa(){
    this._route.navigate(['productpage',106]);
  }
  doublesofa(){
    this._route.navigate(['productpage',105]);
  }

}
