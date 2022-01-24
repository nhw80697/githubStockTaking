import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http : HttpClient) { }


  product:object = {};
  url:string = 'http://213.8.151.154:6592/';
  
  getAllProducts(){
    return this.http.get(this.url + 'items/list');
  }

  getProductByBarcode(barcode:any){
    return this.http.get(this.url + 'items/barcode/' + barcode);
  }

  getProductById(id:any){
    return this.http.get(this.url + 'items/item/' + id);
  }

  newProduct(product:any){
    return this.http.post(this.url + 'items/add', product)
  }

  deleteProductById(id:any){
    console.log("VVV");
    return this.http.delete(this.url + 'items/item/' + id);
  }

  updateProductById(id:any, obj:any){
    return this.http.patch(this.url + 'items/item/' + id, obj);
  }

  getTypes(){
    return this.http.get(this.url + 'types/list-lite')
  }

 newType(name:any){
  return this.http.post(this.url + 'types/add', name)
 }

 getProviders(){
  return this.http.get(this.url + 'doubts/list-lite')
}

newProvider(name:any){
return this.http.post(this.url + 'doubts/add', name)
}
}
