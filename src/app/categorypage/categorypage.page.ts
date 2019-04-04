import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { category } from '../classes/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.page.html',
  styleUrls: ['./categorypage.page.scss'],
})
export class CategorypagePage implements OnInit {

  constructor(private _product:ProductService,private _route:Router) { }

  categoryarr:category[]=[];
  ngOnInit() {
    this._product.getAllCategory().subscribe(
      (data:any)=>{
        this.categoryarr=data;
      }
      );
  }
  onClickCategory(category_id){
    this._route.navigate(['productpage',category_id]);
  }
  onclickAllProducts(){
    this._route.navigate(['productpage',1001]);
  }

}
