import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from './list-products/list-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainComponent } from './main/main.component';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'scan', component: ScanProductComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'list', component: ListProductsComponent},
    {path: 'new', component: NewProductComponent},
    {path: 'new/:id', component: NewProductComponent},
    {path: 'single', component: SingleProductComponent},
    {path: 'single/:id_item', component: SingleProductComponent},
    {path: '**', component: MainComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }