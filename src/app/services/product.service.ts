import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:3000/userproductByCategoryId/';
  // private url: string = 'nodejskalpatarufurniture.herokuapp.com/userproductByCategoryId/';
  private categoryurl:string= "http://localhost:3000/category/";
  private imageurl:string= "http://localhost:3000/get_image/";
  constructor(private _http:HttpClient) { }

  productByCategoryId(category_id){
    return this._http.get(this.url+category_id);
  }
  getAllCategory(){
    return this._http.get(this.categoryurl);
  }
  getAllProducts(){
    return this._http.get("http://localhost:3000/product/");
    // return this._http.get("nodejskalpatarufurniture.herokuapp.com/product/");
    

  }
  getCategoryByName(category_name){
    return this._http.get("http://localhost:3000/category1/"+category_name);
  }
  get_image(product_id){
    return this._http.get(this.imageurl+product_id);
  }
}

