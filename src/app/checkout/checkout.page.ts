import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { ProductDescriptionService } from '../services/product-description.service';
import { product } from '../classes/product';
import { deletecart } from '../classes/deletecart';
import { PaytmService } from '../services/paytm.service';
import { ToastController } from '@ionic/angular';
import { changeqty } from '../classes/changeqty';


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
  grandtotal:number=0;
  stflag=0;
  changeqty:number=1;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _cart:CartService,private _productDetail:ProductDescriptionService,private _paytm:PaytmService,public toastCtrl: ToastController) { }

  ngOnInit() {
    this.user_name=localStorage.getItem('user_email');

    this._cart.getCartProducts(this.user_name).subscribe(
      (data:cart[])=>{
          this.cartarr=data;
          console.log(this.cartarr);
          for(this.i=0;this.i<this.cartarr.length;this.i++){
            this._productDetail.productByProductId(this.cartarr[this.i].fk_product_id).subscribe(
              (data:any)=>{
                this.productDescriptionarr=this.productDescriptionarr.concat(data);
                for(this.j=0;this.j<this.productDescriptionarr.length;this.j++){
                 
                  this.itemTotal[this.j]=this.cartarr[this.j].qty*this.productDescriptionarr[this.j].product_price;
                  while(this.stflag<this.itemTotal.length){
                    this.subtotal+=this.itemTotal[this.stflag];
                    this.stflag++;
                  }
                  
                  //console.log(this.subtotal);
                  this.gst=this.subtotal*0.18;
                  this.gst=parseInt(this.gst+"");
                  this.grandtotal=this.subtotal+this.gst;
                }             

                }
              );
          }
      }
    );


  }
  deletecart(product_id,i){
    // console.log(product_id);
    this._cart.deletecart(new deletecart(this.user_name,product_id)).subscribe(
      (data:any)=>{
        alert("Product deleted.");
        console.log(data);
        this.productDescriptionarr.splice(this.productDescriptionarr.indexOf(product_id),1);
        this.cartarr.splice(this.cartarr.indexOf(product_id),1);
        this.itemTotal.splice(i,1);
        
        console.log(this.productDescriptionarr);
        this.subtotal=0;
        this.gst=0;
        this.stflag=0;
        this.grandtotal=0;
        //this.ngOnInit();
        for(this.j=0;this.j<this.productDescriptionarr.length;this.j++){
          this.itemTotal[this.j]=this.cartarr[this.j].qty*this.productDescriptionarr[this.j].product_price;
          while(this.stflag<this.itemTotal.length){
            this.subtotal+=this.itemTotal[this.stflag];
            this.stflag++;
          }
          
          //console.log(this.subtotal);
          this.gst=this.subtotal*0.18;
          this.gst=parseInt(this.gst+"");
          this.grandtotal=this.subtotal+this.gst;
        }
      }
    );
    // this._route.navigate(["/checkout"]);
  }
  continue(){
    localStorage.setItem("gt",this.grandtotal+"");
    this._route.navigate(["/payment-option"]);
  }
  menutrue(){
    this._route.navigate(["/menu"]);
  }
  paytm(){
    this._paytm.payment=this.grandtotal;
    window.open('http://localhost:8080/','_self');
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
  productPageRouting(product_id){
    this._route.navigate(['product-description',product_id]);
  }
  qtychange(i){
    // console.log(this.cartarr[i].fk_product_id);
    this._cart.updateqty(this.changeqty,this.user_name,this.cartarr[i].fk_product_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.subtotal+=this.cartarr[i].product_price;
        this.gst=this.subtotal*0.18;
          this.gst=parseInt(this.gst+"");
          this.grandtotal=this.subtotal+this.gst;        

      }
    );
  }
}
