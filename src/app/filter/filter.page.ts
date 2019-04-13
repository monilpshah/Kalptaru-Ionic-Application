import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(private _route:Router) { }
  price:string;
  height:string;
  width:string;
  depth:string;

  ngOnInit() {
  
  }
  cancel(){
    this._route.navigate(['productpage',1001]);
  }
  apply(){
    // console.log(this.price);
    // console.log(this.height);
    // console.log(this.width);
    // console.log(this.depth);
    localStorage.setItem('pricerange',this.price);
    localStorage.setItem('heightrange',this.height);
    localStorage.setItem('widthrange',this.width);
    localStorage.setItem('depthrange',this.depth);
    
    this._route.navigate(['productpage',101010]);
  }

}
