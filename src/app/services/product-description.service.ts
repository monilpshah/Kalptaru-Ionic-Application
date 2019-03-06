import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  private url: string = 'http://localhost:3000/product/';
  private similarproducts:string="http://localhost:3000/userproductByCategoryId/";
  constructor(private _http:HttpClient) { }

  productByProductId(product_id){
    return this._http.get(this.url+product_id);
  }
  getSimilarProducts(category_id){
    return this._http.get(this.similarproducts+category_id);
  }

}
