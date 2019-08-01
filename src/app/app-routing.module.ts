import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [ 
  {
    path: 'products',
    component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }