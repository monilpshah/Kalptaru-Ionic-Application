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
  cart1arr:cart[]=[];
  fk_product_id:string="";
  amount:number=0;
  productidarr:number[]=[];
  i:number;
  j:number;
  k:number;
  l:number;
  c:number=0;
  temp:number=0;
  productarr:product[]=[];
  pro1arr:product[]=[];
  orderdetails:orderdetails[]=[];
  insertId:number;
  cnt:number=0;
  ngOnInit() {
    this.user_email=localStorage.getItem('user_email');
    this.amount=Number(localStorage.getItem('gt'));    
  }
  checkout(){
    this._cart.getCartProducts(this.user_email).subscribe(
      (data:any)=>{
        this.cartarr=data;
              this._order.addToOrderTbl(new insertorder(this.amount,this.user_email)).subscribe(
                (data2:any)=>{
                  this.insertId=data2.insertId;
                  for(this.j=0,this.k=0,this.l=0;this.j<insertorder.length,this.k<this.productarr.length,this.l<this.cartarr.length;this.j++,this.k++,this.l++){
                      this.orderdetails.push(new orderdetails(this.insertId,this.cartarr[this.l].fk_product_id,this.cartarr[this.l].fk_category_id,this.cartarr[this.l].product_price,this.cartarr[this.l].qty));                    
                  }
                  this._order.addToOrderDetailsTbl(this.orderdetails).subscribe(
                    (data3:any)=>{
                      console.log(data3);
                    }
                  );
                }
              );
        }
    );
    
    this._cart.getCartProducts(this.user_email).subscribe(
      (data:any)=>{
        this.cart1arr=data;
        for(this.c=0;this.c<this.cart1arr.length;this.c++){
          console.log("in");
          this._order.UpdateProductQtyForOrder(this.cart1arr[this.c].fk_product_id,this.cart1arr[this.c].qty).subscribe(
            (data5:any)=>{
              console.log(data5);
            }
          );
        }
      });
    this.presentToast("Order Placed.");
    this._route.navigate(['home']);
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
}
