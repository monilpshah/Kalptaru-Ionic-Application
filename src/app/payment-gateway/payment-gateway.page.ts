import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { OrderService } from '../services/order.service';
import { order } from '../classes/order';
import { ProductDescriptionService } from '../services/product-description.service';
import { Router } from '@angular/router';
import { insertorder } from '../classes/insertorder';
import { product } from '../classes/product';
import { orderdetails } from '../classes/orderdetails';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.page.html',
  styleUrls: ['./payment-gateway.page.scss'],
})
export class PaymentGatewayPage implements OnInit {

  constructor(public toastCtrl:ToastController,private _cart:CartService,private _order:OrderService,private _productDescription:ProductDescriptionService, private _route:Router) { }
  user_email:string;
  cartarr:cart[]=[];
  fk_product_id:string="";
  amount:number=0;
  productidarr:number[]=[];
  i:number;
  j:number;
  temp:number=0;
  productarr:product[]=[];
  orderdetails:orderdetails[]=[];
  insertId:number;
  ngOnInit() {
    this.user_email=localStorage.getItem('user_email');
    this.amount=Number(localStorage.getItem('gt'));
    this._cart.getCartProducts(this.user_email).subscribe(
      (data:any)=>{
        // console.log(data);
        this.cartarr=data;
      }
    );
  }
  checkout(){
    for(this.i=0;this.i<this.cartarr.length;this.i++){
      this._productDescription.productByProductId(this.cartarr[this.i].fk_product_id).subscribe(
        (data:any)=>{
          this.productarr.push(data);
          //console.log(this.productarr);
        }
      );
  }
    this._order.addToOrderTbl(new insertorder(this.amount,localStorage.getItem('user_email'),"delievery@gmail.com")).subscribe(
        (data:any)=>{
          // console.log(data.insertId);
          this.insertId=data.insertId;
          console.log(this.productarr);
          for(this.i=0;this.i<this.cartarr.length;this.i++){
            this.orderdetails.push(new orderdetails(this.insertId,
              this.cartarr[this.i].fk_product_id,
              this.productarr[this.i].fk_category_id,
              this.productarr[this.i].product_price,
              this.cartarr[this.i].qty));
          }
          console.log(this.orderdetails);
          this._order.addToOrderDetailsTbl(this.orderdetails).subscribe(
            (data:any)=>{
              console.log(data);
              alert("Record added in table successfully");
            this.cartarr.splice(0,this.cartarr.length);
            this.productarr.splice(0,this.productarr.length);
            this.amount=0;
            }
          );
        }
    );
    this._route.navigate(['home']);
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
