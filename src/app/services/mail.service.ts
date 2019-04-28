import { Injectable } from '@angular/core';
import { sendmail } from '../Classes/mail';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../Classes/user';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private forget:string= url.endpoint + 'forget/';
  private email:string= url.endpoint + 'mail/';
  // private forget:string= 'http://localhost:3000/forget/';
  // private email:string=  'http://localhost:3000/mail/';
  constructor(private _http:HttpClient) { }
  getpassById(user_email:string){
    return this._http.get(this.forget+user_email);
  }

  sendmail(item:sendmail){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.email,body,{headers:head1})
  }
}
