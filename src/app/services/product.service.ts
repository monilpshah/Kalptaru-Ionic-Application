import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../classes/product';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = url.endpoint + 'userproductByCategoryId/';
  private categoryurl:string= url.endpoint + "category/";
  private imageurl:string= url.endpoint + "get_image/";
  constructor(private _http:HttpClient) { }

  productByCategoryId(category_id){
    return this._http.get(this.url+category_id);
  }
  getAllCategory(){
    return this._http.get(this.categoryurl);
  }
  getAllProducts(){
    return this._http.get(url.endpoint + "product/");
  }
  getCategoryByName(category_name){
    return this._http.get(url.endpoint + "category1/"+category_name);
  }
  get_image(product_id){
    return this._http.get(this.imageurl+product_id);
  }
}

