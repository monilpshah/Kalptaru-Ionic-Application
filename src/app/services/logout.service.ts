import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  flag:boolean=false;
  constructor() { }
 
}
