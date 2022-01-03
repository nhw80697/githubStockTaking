import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http : HttpClient) { }


  url:string = 'http://213.8.151.154:6592/items/';
  
  getAllProducts(){
    return this.http.get(this.url + 'list');
  }
}
