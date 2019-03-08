import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
    localStorage.setItem('user_email',"");
    console.log('in logout');
    this._route.navigate(["/login"]);
  }

}
