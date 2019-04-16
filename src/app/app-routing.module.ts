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
  { path: 'productpage/:category_id', loadChildren: './productpage/productpage.module#ProductpagePageModule' },
  { path: 'product-description/:product_id', loadChildren: './product-description/product-description.module#ProductDescriptionPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'barcodescanner', loadChildren: './barcodescanner/barcodescanner.module#BarcodescannerPageModule' },
  { path: 'payment-gateway', loadChildren: './payment-gateway/payment-gateway.module#PaymentGatewayPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'callback', loadChildren: './callback/callback.module#CallbackPageModule' },
  { path: 'searchproduct', loadChildren: './searchproduct/searchproduct.module#SearchproductPageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'payment-option', loadChildren: './payment-option/payment-option.module#PaymentOptionPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' },
  { path: 'update-profile', loadChildren: './update-profile/update-profile.module#UpdateProfilePageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'categorypage', loadChildren: './categorypage/categorypage.module#CategorypagePageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'my-order', loadChildren: './my-order/my-order.module#MyOrderPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FAQPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
