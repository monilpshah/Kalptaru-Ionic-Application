import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { ProductDescriptionService } from '../services/product-description.service';
import { product } from '../classes/product';
import { deletecart } from '../classes/deletecart';
import { PaytmService } from '../services/paytm.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cartarr:cart[]=[];
  i:number=0;
  productDescriptionarr:product[]=[];
  totalCartValue:number=0;
  user_name:string;
  itemTotal:number[]=[];
  j:number;
  subtotal:number=0;
  gst:number=0;
  shipping:number=0;
  grandtotal:number=0;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _cart:CartService,private _productDetail:ProductDescriptionService,private _paytm:PaytmService) { }

  ngOnInit() {
    this.user_name=localStorage.getItem('user_email');

    this._cart.getCartProducts(this.user_name).subscribe(
      (data:cart[])=>{
          this.cartarr=data;
          //console.log(this.cartarr);
          for(this.i=0;this.i<this.cartarr.length;this.i++){
            this._productDetail.productByProductId(this.cartarr[this.i].product_id).subscribe(
              (data:any)=>{
                this.productDescriptionarr=this.productDescriptionarr.concat(data);
                for(this.j=0;this.j<this.productDescriptionarr.length;this.j++){
                 
                  this.itemTotal[this.j]=this.cartarr[this.j].quantity*this.productDescriptionarr[this.j].product_price;
                  
                  this.subtotal+=this.itemTotal[this.j];                  
                  //console.log(this.subtotal);
                  this.gst=this.subtotal*0.18;
                  this.shipping=500;
                  this.grandtotal=this.subtotal+this.gst+this.shipping;
                }             

                }
              );
          }
      }
    );


  }
  removeFromCart(product_id){
    console.log(product_id);
    this._cart.deletecart(new deletecart(product_id,this.user_name)).subscribe(
      (data:any)=>{
        alert("Product deleted.");
      }
    );
    this._route.navigate(["/checkout"]);
  }
  continue(){
    this._route.navigate(["/payment-gateway"]);
  }
  menutrue(){
    this._route.navigate(["/menu"]);
  }
  paytm(){
    this._paytm.payment=this.grandtotal;
    window.open('http://localhost:8080/','_self');
  }
}
