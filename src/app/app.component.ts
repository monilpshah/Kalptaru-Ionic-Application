import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { apppages } from './classes/apppages';
import { LogoutPage } from './logout/logout.page';
import { LogoutService } from './services/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },    
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'list'
    // },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'list'
    },
    {
      title: 'Cart',
      url: '/checkout',
      icon: 'list'
    },{
      title: 'Barcode',
      url: '/barcodescanner',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _logoutservice:LogoutService
  ) {
    this.initializeApp();
      
        this.appPages.push(new apppages('Login','/login','list'));         
      // if(_logoutservice.flag=true){
        this.appPages.push(new apppages('Logout','/logout','list'));
        //console.log(localStorage.getItem('user_email'));
      //   this.initializeApp();
      //   this.appPages.splice(5);
      // }
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });   
  }
}
