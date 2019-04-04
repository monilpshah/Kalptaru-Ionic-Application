import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private HtoL: string = 'http://localhost:3000/HighToLow/';
  private LtoH: string = 'http://localhost:3000/LowToHigh/';
  constructor(private _http:HttpClient) { }

  PriceHighToLow(){
    return this._http.get(this.HtoL);
  }
  PriceLowToHigh(){
    return this._http.get(this.LtoH);
  }
}
