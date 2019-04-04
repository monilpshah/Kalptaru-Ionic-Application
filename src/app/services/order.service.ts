import { Injectable } from '@angular/core';
import { order } from '../classes/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = 'http://localhost:3000/order/';
  constructor(private _http:HttpClient) { }

  addtoorder(item:order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  
}
