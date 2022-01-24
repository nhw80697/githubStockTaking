import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  products:any;

  constructor(private router: Router, private requestsService:RequestsService) { 
    this.requestsService.getAllProducts().subscribe((list)=>{
      console.log(list);
      this.products = list;
    })
  }

  showSingle(id:string){
    this.router.navigate(['/single', id]);
  }

  ngOnInit(): void {
  }

}
