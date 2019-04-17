import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { category } from '../classes/category';
import { product } from '../classes/product';
import { ProductDescriptionService } from '../services/product-description.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { checkRepeatProduct } from '../classes/checkRepeatProduct';
import { WishlistService } from '../services/wishlist.service';
import { wishlist } from '../classes/wishlist';
import { ToastController } from '@ionic/angular';
import { deletewishlist } from '../classes/deletewishlist';
import { productimage } from '../classes/product.image';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.page.html',
  styleUrls: ['./product-description.page.scss'],
})
export class ProductDescriptionPage implements OnInit {

  descriptionflag:boolean;
  additionalflag=0;
  reviewflag=0
  category_id:number=101;
  categoryarr:category[]=[];
  productarr:product[]=[];
  productDescriptionarr:product[]=[];
  product_id:number;
  qty:number=1;
  similarproducts:product[]=[];
  cartarr:cart[]=[];
  user_name:string;
  emi:number=3;
  emiPrice:number;
  downpayment:number;
  product_price:number;
  rent:number=0;
  image:productimage[]=[];

  constructor(private _product:ProductService,private _productDescription:ProductDescriptionService,private _route:Router,private _acroute:ActivatedRoute,private _addtocart:CartService,private _wishlist:WishlistService,public toastCtrl:ToastController) { }

  slideOpts = {
    effect: 'flip'
  }

  ngOnInit() {
    this.user_name=localStorage.getItem('user_email');
    this.product_id=this._acroute.snapshot.params['product_id'];
    //menu category
    this._product.getAllCategory().subscribe(
      (data:any)=>{
        this.categoryarr=data;
      }
      );
      //get productdescription by product ID
      this._productDescription.productByProductId(this.product_id).subscribe(
        (data:any)=>{
                   this.productDescriptionarr=data;
                   //EMI CALCULATION
                   this.product_price=this.productDescriptionarr[0].product_price;      
      this.downpayment=this.product_price*0.25;
      this.emiPrice=(((this.product_price-this.downpayment)/3)*0.06)+((this.product_price-this.downpayment)/3);
                   this.rent=this.product_price*0.05;
                   this._productDescription.getSimilarProducts(this.productDescriptionarr[0].fk_category_id).subscribe(
                    (data:any)=>{
                      this.similarproducts=data;
                    }
                  );
        }
      );
      //get similar images
      this._product.get_image(this.product_id).subscribe(
        (data2:any)=>{
          console.log(data2);
          this.image=data2;
        }
      );

      
      
  }

  onClickCategory(index){
    this.category_id=this.categoryarr[index].category_id;
    this._route.navigate(["/product",this.category_id]);
  }
  viewDetails(product_id){
    this._route.navigate(["/product-description",product_id]);
    this._productDescription.productByProductId(this.product_id).subscribe(
      (data:any)=>{
                 this.productDescriptionarr=data;
                 //console.log(data[0].product_Roomtype);
                this.ngOnInit();
                }
    );
  }
  addtocart(){
    this._addtocart.checkRepeatProduct(new checkRepeatProduct(this.product_id,this.user_name)).subscribe(
      (data:any)=>{
        if(data.length==1){
          // alert("already added.");
          this.presentToast("Already added.");
          this._route.navigate(["/checkout"]);
        }
        else {
          this._addtocart.addtocart(new cart(this.product_id,this.user_name,"CASH",this.qty,this.productDescriptionarr[0].fk_category_id,this.productDescriptionarr[0].product_price)).subscribe(
            (data:any)=>{
              // alert("Successfully added to the cart");
              this.presentToast("Successfully added to the cart.");
              this._route.navigate(["/checkout"]);
            }
          );
        }
      }
    );
    
  }
  wishlist(product_id){
    // this._wishlist.addtowishlist(new wishlist(product_id,this.user_name)).subscribe(
    //   (data:any)=>{
    //     // alert("Successfully added to the wishlist");
    //     this.presentToast("Successfully added to the wishlist.");
    //     this.ngOnInit();

    //   }
    // );
    this._wishlist.checkRepeatWishlist(new deletewishlist(this.user_name,product_id)).subscribe(
      (data:any)=>{
          if(data.length==1){
            // alert("already added.");
            this.presentToast("Already Added.");
            this._route.navigate(["/wishlist"]);
          }                        
          else{
           this._wishlist.addtowishlist(new wishlist(product_id,this.user_name)).subscribe(
            (data:any)=>{
              // console.log(data);
              // alert("Successfully added to the Wishlist");                              
              this.presentToast("Successfully added to the wishlist.");
              }
            );
          }
        }
      );
  }
  onClickDescription(){
    if(this.descriptionflag){
      console.log(this.descriptionflag);
      this.descriptionflag=false;
    }
    else{
      console.log(this.descriptionflag);
      this.descriptionflag=true;
    }
  }

  addToCart(product_id){
    //console.log(product_id);
   this._addtocart.addtocart(new cart(product_id,this.user_name,"CASH",this.qty,this.productDescriptionarr[0].fk_category_id,this.productDescriptionarr[0].product_price)).subscribe(
     (data:any)=>{
      //  console.log(data);
       alert("Successfully added to the cart");
       this._route.navigate(["/checkout"]);
     }
   );
  }
  onchangeEmi(){
    // console.log(this.emi);
    this.product_price=this.productDescriptionarr[0].product_price;
    //console.log("Product Price is: "+this.product_price);
    this.downpayment=this.product_price*0.25;
    this.emiPrice=(((this.product_price-this.downpayment)/this.emi)*0.06)+((this.product_price-this.downpayment)/3);
    this.emiPrice=parseInt(this.emiPrice+"");
    //console.log(this.emiPrice);
  }  
  qtyIncrement(){
    if(this.qty==10){
      this.qty=10;
    }
    else{
      this.qty++;
    }
    
  }
  qtyDecrement(){
    if(this.qty==1){
      this.qty=1;
    }
    else{
      this.qty--;
    }
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      cssClass: "toast-scheme ",
      showCloseButton: true,
      // closeButtonText: "OK",
      position: 'bottom'
    });
    toast.present();
  }  
}
