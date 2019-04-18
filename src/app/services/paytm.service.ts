import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaytmService {

  payment:number=1;
  constructor() { }
}
