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
      title: 'Wishlist',
      url: '/wishlist',
      icon: 'heart'
    },
    {
      title: 'Category',
      url: '/categorypage',
      icon: 'cart'
    },
    {
      title: 'Cart',
      url: '/checkout',
      icon: 'cart'
    },
    {
      title: 'My orders',
      url: '/my-order',
      icon: 'journal'
    },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'list'
    },
    {
      title: 'My Profile',
      url: '/my-profile',
      icon: 'contact'
    },
    {
      title: 'Change Password',
      url: '/change-password',
      icon: 'hand'
    },
    {
      title: 'Forgot Password',
      url: '/forgot-password',
      icon: 'at'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'information-circle-outline'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'help'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _logoutservice:LogoutService
  ) {
    this.initializeApp();
      
        this.appPages.push(new apppages('Login','/login','log-in'));         
        this.appPages.push(new apppages('Logout','/logout','log-out'));

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });   
  }
}
