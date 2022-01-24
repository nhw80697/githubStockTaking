import { Component, Input, OnInit } from '@angular/core';
import { Router,  ParamMap, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RequestsService } from '../requests.service'
interface Product  {
  id?: string,
  barcode?: string,
  name?: string,
  cost?: string,
  price?: string,
  stock?: string,
  typeId?: string,
  doubtId?: string,
  note?: string,
  employee?: string,
};
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {


  id?:string;
  product?: any; ///Product;
  copyProduct: any;
  changes: boolean = false;
  response: string = "";
  message:string = "";
  types:any;
  providers:any;

  constructor(private router: Router, private requestsService: RequestsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params['id_item']);
    this.requestsService.getProductById(this.id).subscribe(pro => {
      this.product = pro;
      this.copyProduct = {...pro};
    })

    this.requestsService.getTypes().subscribe(types => {
      console.log(types)
      this.types = types
    })

    this.requestsService.getProviders().subscribe(providers => {
      console.log(providers)
      this.providers = providers
    })
    
   }

   updateProduct(form: any) {
    this.requestsService.updateProductById(this.id, form).subscribe((data) => {
      this.response = "השינויים נשמרו בהצלחה!";
    })
    console.log(form)
  }

  deleteProduct(id:any){
    this.requestsService.deleteProductById(id).subscribe(mes =>{
      console.log(mes);
      this.response = "נמחק בהצלחה!"
    });
    
  }

  updatForm(){
    this.changes = false;
    for (let key in this.product){
      if (this.product[key] != this.copyProduct[key]){
        this.changes = true;
        console.log(this.changes)
      }
    }
  }

  routeToList(){
    this.router.navigate(['/list'])
  }
  ngOnInit(): void {
  }
}
