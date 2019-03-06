import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { wishlist } from '../classes/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url: string = 'http://localhost:3000/wishlist/';
  constructor(private _http:HttpClient) { }
  addtowishlist(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getCartProducts(user_name){
    return this._http.get(this.url+user_name);
  }
}
