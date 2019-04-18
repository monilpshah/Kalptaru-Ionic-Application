import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../classes/user';
import { password } from '../classes/password';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = url.endpoint + 'user/';
  private url1: string = url.endpoint + 'userPassword/';

  constructor(private _http:HttpClient) { }

  myprofile(user_email){
    return this._http.get(this.url+user_email);
  }

  login(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  updateProfile(item:user)
  {
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');

      return this._http.put(this.url+item.user_email,body,{headers:head1});
    }
    updatePassword(item:password){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url1+item.user_email,body,{headers:head1});
    }
}
