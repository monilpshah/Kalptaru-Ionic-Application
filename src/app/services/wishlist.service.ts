import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { wishlist } from '../classes/wishlist';
import { deletewishlist } from '../classes/deletewishlist';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url: string = url.endpoint + 'wishlist/';
  private check: string = url.endpoint + 'checkRepeatWishlist/';
  constructor(private _http:HttpClient) { }
  addtowishlist(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getCartProducts(user_name){
    return this._http.get(this.url+user_name);
  }
  deletewishlist(item:deletewishlist){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.fk_user_email+"/"+item.fk_product_id,{headers:head1});
  }
  checkRepeatWishlist(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.check,body,{headers:head1});
  }
}
