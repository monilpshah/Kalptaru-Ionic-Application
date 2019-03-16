import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( private navCtrl:NavController,public toastCtrl:ToastController) { }

  ngOnInit() {
   
  }
  i:number;
  goback() {

      this.navCtrl.pop();
    console.log('Click on button Test Console Log');
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
