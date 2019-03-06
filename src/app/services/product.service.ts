import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:3000/userproductByCategoryId/';
  private categoryurl:string= "http://localhost:3000/category/"
  constructor(private _http:HttpClient) { }

  productByCategoryId(category_id){
    return this._http.get(this.url+category_id);
  }
  getAllCategory(){
    return this._http.get(this.categoryurl);
  }
  getAllProducts(){
    return this._http.get("http://localhost:3000/product/");
  }
}

