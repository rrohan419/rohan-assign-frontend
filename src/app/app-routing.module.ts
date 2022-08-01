import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './html-pages/checkout.component';
import { SuccessComponent } from './html-pages/success.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path : '', component: ProductDetailComponent},
  { path : 'checkout', component : CheckoutComponent},
  { path : 'success', component : SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
