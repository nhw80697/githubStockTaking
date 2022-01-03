import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  products:any;

  constructor(private requestsService:RequestsService) { 
    this.requestsService.getAllProducts().subscribe((list)=>{
      console.log(list);
      this.products = list;
    })
  }

  ngOnInit(): void {
  }

}
