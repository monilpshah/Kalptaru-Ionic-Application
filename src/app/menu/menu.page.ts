import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( private navCtrl:NavController) { }

  ngOnInit() {
   
  }
  i:number;
  goback() {

      this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }

}
