import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cart } from '../classes/cart';
import { deletecart } from '../classes/deletecart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = 'http://localhost:3000/addtocart/';
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
    console.log("delete cart: "+item);
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.user_name+"/"+item.product_id,{headers:head1});
  }
}
