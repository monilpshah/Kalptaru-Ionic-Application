import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cart } from '../classes/cart';
import { deletecart } from '../classes/deletecart';
import { changeqty } from '../classes/changeqty';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string =  url.endpoint +'addtocart/';
  private check: string = url.endpoint + 'checkRepeatProduct/';
  private qty: string = url.endpoint + 'changeqty/';
   
  constructor(private _http:HttpClient) { }
  addtocart(item:cart){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getCartProducts(user_name){
    return this._http.get(this.url+user_name);
  }
  deletecart(item:deletecart){
    //console.log("delete cart: "+item);
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.fk_user_email+"/"+item.fk_product_id,{headers:head1});
  }
  checkRepeatProduct(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.check,body,{headers:head1});
  }
  upadtePayment(paymentOption,user_email){
    let body=JSON.stringify(paymentOption);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+user_email,body,{headers:head1});
  }
  updateqty(item,item1,item2){
    // console.log("hello");
    let body=JSON.stringify("");
    return this._http.put(this.qty+item1+"/"+item+"/"+item2,body);
  }

}
