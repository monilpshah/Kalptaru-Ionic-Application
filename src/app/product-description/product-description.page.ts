import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { category } from '../classes/category';
import { product } from '../classes/product';
import { ProductDescriptionService } from '../services/product-description.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { cart } from '../classes/cart';
import { WishlistService } from '../services/wishlist.service';
import { wishlist } from '../classes/wishlist';

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
  size:string="6 X 7";
  similarproducts:product[]=[];
  cartarr:cart[]=[];
  user_name:string;
  emi:number=3;
  emiPrice:number;
  downpayment:number;
  product_price:number;


  constructor(private _product:ProductService,private _productDescription:ProductDescriptionService,private _route:Router,private _acroute:ActivatedRoute,private _addtocart:CartService,private _wishlist:WishlistService) { }

  ngOnInit() {
    this.user_name=localStorage.getItem('user_name');
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
                   //console.log(data[0].product_Roomtype);
        }
      );
      //get similar products
      this._productDescription.getSimilarProducts(this.category_id).subscribe(
        (data:any)=>{
          this.similarproducts=data;
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
    this._addtocart.addtocart(new cart(this.product_id,this.size,this.qty,this.user_name,"CASH")).subscribe(
      (data:any)=>{
        alert("Successfully added to the cart");
        this._route.navigate(["/checkout"]);
      }
    );
  }
  wishlist(product_id){
    this._wishlist.addtowishlist(new wishlist(product_id,this.user_name)).subscribe(
      (data:any)=>{
        alert("Successfully added to the wishlist");
        this.ngOnInit();

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
   this._addtocart.addtocart(new cart(product_id,this.size,this.qty,this.user_name,"CASH")).subscribe(
     (data:any)=>{
       //console.log(data);
       alert("Successfully added to the cart");
       this._route.navigate(["/checkout"]);
     }
   );
  }
  onchangeEmi(){
    //console.log(this.emi);
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
  
}
