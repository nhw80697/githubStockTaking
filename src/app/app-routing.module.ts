import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from './list-products/list-products.component';
import { NewProductComponent } from './new-product/new-product.component'

const appRoutes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'list', component: ListProductsComponent},
    {path: 'new', component: NewProductComponent},
    {path: 'new/:id_item', component: NewProductComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }