import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  private url: string = url.endpoint + 'product/';
  private similarproducts:string=url.endpoint + "userproductByCategoryId/";
  constructor(private _http:HttpClient) { }

  productByProductId(product_id){
    return this._http.get(this.url+product_id);
  }
  getSimilarProducts(category_id){
    return this._http.get(this.similarproducts+category_id);
  }

}
