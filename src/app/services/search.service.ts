import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url: string = url.endpoint + 'search/';
  constructor(private _http:HttpClient) { }

  getSearchedProducts(word){
    console.log(word);
    return this._http.get(this.url+word);
  }
}
