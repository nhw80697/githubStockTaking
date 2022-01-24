import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
