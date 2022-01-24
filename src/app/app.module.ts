import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule } from '@angular/forms';
import { NgBarcodeDetectorModule } from 'ng-barcode-detector';

import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './new-product/new-product.component';

import { AppRoutingModule } from './app-routing.module';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainComponent } from './main/main.component';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { SettingsComponent } from './settings/settings.component';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    NewProductComponent,
    SingleProductComponent,
    MainComponent,
    ScanProductComponent,
    SettingsComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgBarcodeDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
