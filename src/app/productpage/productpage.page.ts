import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { category } from '../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { cart } from '../classes/cart';
import { wishlist } from '../classes/wishlist';
import * as $ from 'jquery';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {

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
  user_name:string;
  index:string;
  product_offer:string;
  sort:string;

  
 constructor(private _product:ProductService,private _acroute:ActivatedRoute,private _route:Router,private _addtocart:CartService,private _wishlist:WishlistService,public navCtrl: NavController) { }

 ngOnInit() {
  this.user_name=localStorage.getItem('user_email');
  //console.log(this.user_name);
  //  this.category_id=this._acroute.snapshot.params['category_id'];
  //  //this.category_id=101;
  //  this._product.productByCategoryId(this.category_id).subscribe(
  //    (data:any)=>{
  //      console.log(data);
  //      this.productarr=data;
  //    }
  //  );

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
 onClickCategory(index){
   console.log(index);
   this.category_id=this.categoryarr[index].category_id;
   //console.log(this.category_id);
   this._product.productByCategoryId(this.category_id).subscribe(
     (data:any)=>{
       //console.log(data);
       this.productarr=data;
     }
   );
 }
 onClickProduct(product_id){
   this._route.navigate(['product-description',product_id]);
 }
 showAllCategory(){
  this._product.getAllProducts().subscribe(
    (data:any)=>{
      this.productarr=data;
    }
  );   
 }
 addToCart(product_id){
   //console.log(product_id);
  this._addtocart.addtocart(new cart(product_id,this.size,this.qty,this.user_name,"CASH")).subscribe(
    (data:any)=>{
      //console.log(data);
      alert("Successfully added to the cart");
      this._route.navigate(["/checkout"]);
    }
  );
 }
 addToWishlist(product_id){
   console.log(this.user_name);
   this._wishlist.addtowishlist(new wishlist(product_id,this.user_name)).subscribe(
     (data:any)=>{
       console.log(data);
      alert("Successfully added to the Wishlist");
      
     }
   );
 }
 searchclick(){
   this._route.navigate(['/searchproduct']);
 } 
  
 
}
