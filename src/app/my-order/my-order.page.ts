import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { insertorder } from '../classes/insertorder';
import { orderdetails } from '../classes/orderdetails';
import { myorder } from '../classes/myorder';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {

  constructor(private _route:Router,private _order:OrderService) { }

  user_email:string;
  orderarr:myorder[]=[];
  orderDetailsarr:orderdetails;
  ngOnInit() {
    this.user_email=localStorage.getItem('user_email');
    this._order.getOrderTable(this.user_email).subscribe(
      (data:any)=>{
        // console.log("order: "+JSON.stringify(data));
        console.log("order: "+JSON.stringify(data[0].order_id));
        this._order.getOrderDetailsTable(JSON.stringify(data[0].order_id)).subscribe(
          (data:any)=>{
            console.log("order details: "+JSON.stringify(data));
          }
        );
      }
    );

  }

}
