import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './html-pages/checkout.component';
import { SuccessComponent } from './html-pages/success.component';

const routes: Routes = [
  { path : 'checkout', component : CheckoutComponent},
  { path : 'success', component : SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
