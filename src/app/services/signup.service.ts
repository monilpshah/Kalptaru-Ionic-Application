import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signup } from '../classes/signup';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url: string = url.endpoint + 'signup/';

  constructor(private _http:HttpClient) { }

  signupaddrecord(item:signup){
    // console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
