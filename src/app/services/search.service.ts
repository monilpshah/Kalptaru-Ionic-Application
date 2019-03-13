import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url: string = 'http://localhost:3000/search/';
  constructor(private _http:HttpClient) { }

  getSearchedProducts(word){
    console.log(word);
    return this._http.get(this.url+word);
  }
}
