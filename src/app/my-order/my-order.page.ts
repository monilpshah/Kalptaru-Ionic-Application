import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { insertorder } from '../classes/insertorder';
import { orderdetails } from '../classes/orderdetails';
import { myorder } from '../classes/myorder';
import { ProductService } from '../services/product.service';
import { ProductDescriptionService } from '../services/product-description.service';
import { product } from '../classes/product';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {

  constructor(private _route:Router,private _order:OrderService,private _product:ProductDescriptionService) { }

  user_email:string;
  orderarr:myorder[]=[];
  orderDetailsarr:orderdetails[]=[];
  i:number=0;
  j:number;
  productarr:product[]=[];
  ngOnInit() {
    this.user_email=localStorage.getItem('user_email');
    this._order.getOrderTable(this.user_email).subscribe(
      (data:any)=>{
        this.orderarr=data;
        // console.log("order: "+JSON.stringify(data));
        // console.log("order: "+JSON.stringify(data[0].order_id));
        // console.log(this.orderarr);
        for(this.i=0;this.i<this.orderarr.length;this.i++){
          this._order.getOrderDetailsTable(this.orderarr[this.i].order_id).subscribe(
            (data2:any)=>{
              this.orderDetailsarr=data2;
              for(this.j=0;this.j<this.orderDetailsarr.length;this.j++){
                  this._product.productByProductId(this.orderDetailsarr[this.j].fk_product_id).subscribe(
                    (data3:any)=>{
                      this.productarr=data3;
                      // this.productarr.push(data3);
                      // this.productarr.concat(data3);
                      //console.log(this.productarr);
                    }
                  );
              }
              console.log(this.productarr);
              // console.log("order details: "+JSON.stringify(data));
              // console.log(this.orderDetailsarr);
            }
          );
        }        
      }
    );

  }

}
