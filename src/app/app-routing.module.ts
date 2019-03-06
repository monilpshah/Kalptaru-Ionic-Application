import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login',
   loadChildren: './login/login.module#LoginPageModule' 
  },
  { path: 'signup',
   loadChildren: './signup/signup.module#SignupPageModule' 
  },
  { path: 'productpage', loadChildren: './productpage/productpage.module#ProductpagePageModule' },
  { path: 'product-description/:product_id', loadChildren: './product-description/product-description.module#ProductDescriptionPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
