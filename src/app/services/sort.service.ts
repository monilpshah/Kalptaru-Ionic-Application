import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private HtoL: string = url.endpoint + 'HighToLow/';
  private LtoH: string = url.endpoint + 'LowToHigh/';
  constructor(private _http:HttpClient) { }

  PriceHighToLow(){
    return this._http.get(this.HtoL);
  }
  PriceLowToHigh(){
    return this._http.get(this.LtoH);
  }
}
