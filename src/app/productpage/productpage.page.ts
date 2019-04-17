import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../classes/product';
import { category } from '../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { cart } from '../classes/cart';
import { wishlist } from '../classes/wishlist';
import * as $ from 'jquery';
import { IonInfiniteScroll } from '@ionic/angular';
import { checkRepeatProduct } from '../classes/checkRepeatProduct';
import { deletewishlist } from '../classes/deletewishlist';
import { SortService } from '../services/sort.service';
import { LoadingController } from '@ionic/angular';
import { strict } from 'assert';




@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {

  productarr:product[]=[];

  product_id:string;
  product_name:string;
  category_id:number=1001;
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
  notifications:string;
  depthrange:String;
  heightrange:String;
  widthrange:String;
  pricerange:String;
  i:number;
  filterarr:product[]=[];

  
 constructor(private _product:ProductService,private _acroute:ActivatedRoute,private _route:Router,private _addtocart:CartService,private _wishlist:WishlistService,public navCtrl: NavController,public toastCtrl:ToastController,private _sort:SortService,public loadingController: LoadingController) { }

 ngOnInit() {
  //  this.presentLoadingWithOptions();
   this.presentLoading();
        this.user_name=localStorage.getItem('user_email');
        this.category_id=this._acroute.snapshot.params['category_id'];
        // All Products
    if(this.category_id==1001){
                        this._product.getAllProducts().subscribe(
                            (data:any)=>{
                                    this.productarr=data;
                              }
                          );   
    }
    // Sort By Price High to Low
    else if(this.category_id==1101){
            this._sort.PriceHighToLow().subscribe(
              (data:any)=>{
                this.productarr=data;
              }
            );
    }
    //Sort By Price Low to High
    else if(this.category_id==1102){
      this._sort.PriceLowToHigh().subscribe(
        (data:any)=>{
          this.productarr=data;
        }
      );
    }
    else if(this.category_id==101010){
      this.pricerange=localStorage.getItem('pricerange');
      this.widthrange=localStorage.getItem('widthrange');
      this.heightrange=localStorage.getItem('heightrange');
      this.depthrange=localStorage.getItem('depthrange');
      this._product.getAllProducts().subscribe(
        (data:any)=>{
                this.productarr=data;
                // if(this.pricerange=='5000'){
                  if(this.pricerange!='undefined')
                  {  
                    this.filterarr = [];
                    
                for(this.i=0;this.i<this.productarr.length;this.i++){
                      if((this.productarr[this.i].product_price> Number(this.pricerange)) && (this.productarr[this.i].product_price<Number(this.pricerange)+5000)){
                        this.filterarr.push(this.productarr[this.i]);
                        
                    }  
                    }
                    this.productarr = this.filterarr;
                  }
                  
                  if(this.widthrange!='undefined'){
                  this.filterarr = [];
                   
                  for(this.i=0;this.i<this.productarr.length;this.i++){
                   
                      if((this.productarr[this.i].product_width> Number(this.widthrange)) && (this.productarr[this.i].product_width<Number(this.widthrange)+20)){
                        this.filterarr.push(this.productarr[this.i]);
                        
                    }
                    }
                    this.productarr = this.filterarr;
                  }


                  if(this.heightrange!='undefined')
                  {  
                    this.filterarr = [];
                    
                for(this.i=0;this.i<this.productarr.length;this.i++){
                  
                  if((this.productarr[this.i].product_height> Number(this.heightrange)) && (this.productarr[this.i].product_height<Number(this.heightrange)+20)){
                        this.filterarr.push(this.productarr[this.i]);
                        
                    }  
                    }
                    this.productarr = this.filterarr;
                  }


                  if(this.depthrange!='undefined')
                  {  
                    this.filterarr = [];
                    
                for(this.i=0;this.i<this.productarr.length;this.i++){
                  
                  if((this.productarr[this.i].product_depth> Number(this.depthrange)) && (this.productarr[this.i].product_depth<Number(this.depthrange)+5)){
                        this.filterarr.push(this.productarr[this.i]);
                        
                    }  
                    }
                    this.productarr = this.filterarr;
                  }

                  if(this.depthrange=='undefined' && this.pricerange=='undefined' && this.heightrange=='undefined' && this.widthrange=='undefined'){
                    this._product.getAllProducts().subscribe(
                      (data:any)=>{
                              this.filterarr=data;
                              this.productarr=data;
                      }
                    );
                  }

                  this.productarr=this.filterarr;
                  
                }
          // }
      );
      //this.checkrange();
    }
  else{
   
                    this._product.productByCategoryId(this.category_id).subscribe(
                      (data:any)=>{
                        // console.log(data);
                        this.productarr=data;
                      }
                    );
                    }
                    
                    this._product.getAllCategory().subscribe(
                    (data:any)=>{
                      this.categoryarr=data;
                    }
                    );
 }
 //ngonInit Ends

  checkrange(){
        
  }


    onClickCategory(){
      this._route.navigate(['categorypage']);
              //   if(this.index == "all"){
              //               // console.log("in all category");
              //               this._route.navigate(['productpage',1001]);
              //   }
              //   else{
              //                     this._product.getCategoryByName(this.index).subscribe(
              //                       (data:any)=>{
              //                         // console.log(data);
              //                         this.category_id=data[0].category_id;
              //                         this._product.productByCategoryId(this.category_id).subscribe(
              //                           (data:any)=>{
              //                             // console.log(data);
              //                             this.productarr=data;
              //                           }
              //                         );
              //                       }
              //                     );
              //                     this._route.navigate(['productpage',this.category_id]);
              // }
    }
    onClickCategoryid(category_name){
      if(this.index == "all"){
                  // console.log("in all category");
                  this._route.navigate(['productpage',1001]);
      }
      else{
                        this._product.getCategoryByName(category_name).subscribe(
                          (data:any)=>{
                            // console.log(data);
                            this.category_id=data[0].category_id;
                            this._product.productByCategoryId(this.category_id).subscribe(
                              (data:any)=>{
                                // console.log(data);
                                this.productarr=data;
                              }
                            );
                          }
                        );
                        this._route.navigate(['productpage',this.category_id]);
    }
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
    addToCart(product_id,fk_category_id,product_price){
      this._addtocart.checkRepeatProduct(new checkRepeatProduct(product_id,this.user_name)).subscribe(
        (data:any)=>{
          if(data.length==1){
            // alert("already added.");
            this.presentToast("Already Added.");
            this._route.navigate(["/checkout"]);
          }
          else {
            this._addtocart.addtocart(new cart(product_id,this.user_name,"CASH",this.qty,fk_category_id,product_price)).subscribe(
              (data:any)=>{
                console.log(data);
                // alert("Successfully added to the cart");
                this.presentToast("Successfully added to the Cart.");
                this._route.navigate(["/checkout"]);
                // console.log(data);
              }
            );
          }
        }
      );
      
    }
    addToWishlist(product_id){
                        // console.log(this.user_name);
                        
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
    searchclick(){
            this._route.navigate(['/searchproduct']);
    } 
      
    onClickAllCategory(){

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
    sorting(){
      if(this.notifications=="hTol")  {
        this._route.navigate(['productpage',1101]);    
      }
      else if(this.notifications=="lToH")  {
        this._route.navigate(['productpage',1102]);
      }
    }
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Wait for a while',
        duration: 2000
      });
      await loading.present();

      const { role, data } = await loading.onDidDismiss();
    }
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 5000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
    doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    onClickFilter(){
      this._route.navigate(['filter']);
    }
}
