import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { OrderService } from '../services/order.service';
import { order } from '../classes/order';
import { ProductDescriptionService } from '../services/product-description.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.page.html',
  styleUrls: ['./payment-gateway.page.scss'],
})
export class PaymentGatewayPage implements OnInit {

  constructor(public toastCtrl:ToastController,private _cart:CartService,private _order:OrderService,private _productDescription:ProductDescriptionService) { }
  user_email:string;
  cartarr:cart[]=[];
  fk_product_id:string="";
  amount:number=0;
  productidarr:number[]=[];
  i:number;
  temp:number=0;
  ngOnInit() {
    this.user_email=localStorage.getItem('user_email');
    this._cart.getCartProducts(this.user_email).subscribe(
      (data:any)=>{
        // console.log(data);
        this.cartarr=data;
      }
    );
  }
  checkout(){
    for(this.i=0;this.i<this.cartarr.length;this.i++){
      this.productidarr[this.i]=this.cartarr[this.i].fk_product_id;
      this.fk_product_id+=this.cartarr[this.i].fk_product_id+",";

      this._productDescription.productByProductId(this.productidarr[this.i]).subscribe(
        (data:any)=>{
          console.log(data);
                   this.amount+=data[0].product_price;
                   console.log("amount is: "+this.amount);                
                   //console.log(data[0].product_price); 
        }
      );
    }
    console.log("amount(bhopo) is: "+this.amount);                
    // this._order.addtoorder(new order(this.amount,this.fk_product_id,this.user_email)).subscribe(
      //   (data:any)=>{
      //     console.log(data);
      //   }
   // );
  
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
