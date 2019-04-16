import { Component, OnInit } from '@angular/core';
import { ProductDescriptionService } from '../services/product-description.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { wishlist } from '../classes/wishlist';
import { product } from '../classes/product';
import { deletewishlist } from '../classes/deletewishlist';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _cart:CartService,private _productDetail:ProductDescriptionService,private _wishlist:WishlistService,public toastCtrl:ToastController) { }
  user_email:string;
  i:number;
  wishlistarr:wishlist[]=[];
  productdetails:product[]=[];
  ngOnInit() {
this.user_email=localStorage.getItem("user_email");
              this._wishlist.getCartProducts(this.user_email).subscribe(
                (data:any)=>{
                  this.wishlistarr=data;
                  // console.log(data);
                            for(this.i=0;this.i<this.wishlistarr.length;this.i++){
                              this._productDetail.productByProductId(this.wishlistarr[this.i].fk_product_id).subscribe(
                                (data:any)=>{
                                    this.productdetails=this.productdetails.concat(data);
                                    // console.log(data);
                                }
                              );
                            }   
                    }
              );
  }

  deletecart(product_id,i){
    // console.log(product_id);
    this._wishlist.deletewishlist(new deletewishlist(this.user_email,product_id)).subscribe(
      (data:any)=>{
        alert("Product deleted.");
        // console.log(data);
        this.wishlistarr.splice(i,1);
        this.productdetails.splice(i,1);
        
      }
    );
    // this._route.navigate(["/checkout"]);
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
}
