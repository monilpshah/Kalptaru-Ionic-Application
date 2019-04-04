import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { NavController, ToastController } from '@ionic/angular';
import { category } from '../classes/category';
import { product } from '../classes/product';
import { SearchService } from '../services/search.service';
import { search } from '../classes/search';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.page.html',
  styleUrls: ['./searchproduct.page.scss'],
})
export class SearchproductPage implements OnInit {

  user_name:string;
  productarr:product[]=[];

  product_id:string;
  product_name:string;
  category_id:number=101;
  product_price:number;
  product_colour:string;
  product_image:string;
  product_weight:number;
  product_warranty:number;
  product_material:string;
  product_Roomtype:string;
  product_height:number;
  product_width:number;
  product_depth:number;
  product_qty:number;
  product_soh:number;
  categoryarr:category[]=[];
  allproducts:product[]=[];
  size:string="4x8";
  qty:number=1;
  index:number;
  product_offer:string;
  i:number;
  searchedItem:string="";
  searcharr:search[]=[];

  constructor(private _product:ProductService,private _acroute:ActivatedRoute,private _route:Router,private _addtocart:CartService,private _wishlist:WishlistService,public navCtrl: NavController,private _search:SearchService,public toastCtrl:ToastController) { }

  ngOnInit() {
    this.user_name=localStorage.getItem('user_email');
    this._product.getAllProducts().subscribe(
      (data:any)=>{
        this.productarr=data;
      }
    );
  
     this._product.getAllCategory().subscribe(
     (data:any)=>{
       this.categoryarr=data;
     }
     );
  }


   onClickProduct(product_id){
    this._route.navigate(['product-description',product_id]);
  }
  chagedItem(searchedItem){
    if(searchedItem==""){
      searchedItem=" ";
    }
    console.log(searchedItem);
    this._search.getSearchedProducts(searchedItem).subscribe(
      (data:any)=>{
        console.log(this.searcharr);
        this.searcharr=data;
      }
    );
  }
  viewCtrl_dismiss(){
    this._route.navigate(['productpage',1001]);
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
