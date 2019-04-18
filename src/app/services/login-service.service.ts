import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login } from '../classes/login';
import { url } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url: string = url.endpoint + 'login/';
  private url1: string = url.endpoint + 'loginByEmail/';

  constructor(private _http:HttpClient) { }

  login(item:login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  loginByEmail(item:login){
    //console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head1});
  }
}
