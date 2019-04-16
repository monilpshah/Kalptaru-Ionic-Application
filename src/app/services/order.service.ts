import { Injectable } from '@angular/core';
import { order } from '../classes/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { insertorder } from '../classes/insertorder';
import { orderdetails } from '../classes/orderdetails';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = 'http://localhost:3000/ordertable/';
  private url1: string = 'http://localhost:3000/orderdetailstable/';
  constructor(private _http:HttpClient) { }

  addtoorder(item:order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  addToOrderTbl(item:insertorder){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  addToOrderDetailsTbl(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head1});
  }
  getOrderTable(user_email){
    return this._http.get(this.url+user_email);
  }
  getOrderDetailsTable(fk_order_id){
    return this._http.get(this.url1+fk_order_id);
  }
}
