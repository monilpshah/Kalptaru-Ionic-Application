import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaytmService } from '../services/paytm.service';
import { CartService } from '../services/cart.service';
import { payment_option } from '../classes/payment_option';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.page.html',
  styleUrls: ['./payment-option.page.scss'],
})
export class PaymentOptionPage implements OnInit {

  user_email:string;
  paymentOption:string="";
  emi:number=3;
  emiPrice:number;
  downpayment:number;
  gt:number;
  grandtotal:string;
  constructor(private _route:Router,private _paytm:PaytmService,private _cartservice:CartService,public toastCtrl:ToastController) { }

  ngOnInit() {
    this.user_email=localStorage.getItem("user_email");
    this.grandtotal=localStorage.getItem("gt");
    this.gt=parseInt(this.grandtotal);
    this.downpayment=this.gt*0.25;
    this.emiPrice=(((this.gt-this.downpayment)/this.emi)*0.06)+((this.gt-this.downpayment)/3);
    this.emiPrice=parseInt(this.emiPrice+"");
  }
  onchangeEmi(){
    //console.log(this.emi);    
    //console.log("Product Price is: "+this.product_price);
    this.downpayment=this.gt*0.25;
    this.emiPrice=(((this.gt-this.downpayment)/this.emi)*0.06)+((this.gt-this.downpayment)/3);
    this.emiPrice=parseInt(this.emiPrice+"");
    //console.log(this.emiPrice);
  } 
  continue(){
    if(this.paymentOption==""){
      this.presentToast("Select Option.");
    }
    else{
      this._cartservice.upadtePayment(new payment_option(this.paymentOption),this.user_email).subscribe(
        (data:any)=>{
          this.presentToast("Payment Updated");
          console.log(this.paymentOption);
        }
      );
      this._route.navigate(["/payment-gateway"]);
    }
    // console.log(this.paymentOption);
    
  }
  
  paytm(){
    this._paytm.payment=this.gt;
    window.open('http://localhost:8080/','_self');
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
