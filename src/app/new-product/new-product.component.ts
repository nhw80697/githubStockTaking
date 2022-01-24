import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {


  prudect = {
    id: "",
    barcode: "",
    name: "",
    cost: "",
    price: "",
    stock: "",
    typeId: "",
    doubtId: "",
    note: "",
    employee: ""
  }
  types:any;
  providers:any;
  response:string = "";
  
  constructor(private router: Router,  private route: ActivatedRoute, private requestsService:RequestsService) { 
    this.route.params.subscribe( params => this.prudect.barcode = params['id']);

    this.requestsService.getTypes().subscribe(types => {
      console.log(types)
      this.types = types
    })

    this.requestsService.getProviders().subscribe(providers => {
      console.log(providers)
      this.providers = providers
    })
  }
  
  addNewProduct(form:any){
    console.log(form);
    this.requestsService.newProduct(form).subscribe((data)=>{
      console.log(data)
      this.response = "מוצר נוסף בהצלחה!"
    })
  }


  ngOnInit(): void {
  }

}
