import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestsService } from '../requests.service';
import { Router,  ParamMap, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scan-product',
  templateUrl: './scan-product.component.html',
  styleUrls: ['./scan-product.component.css']
})
export class ScanProductComponent implements OnInit {
  router: any;

  constructor(private requestsService:RequestsService, router:Router) { }
  
  product:any;
  copyProduct:any;
  changes:boolean = false;
  barcodeInput:string = "";
  existingProduct:boolean = false;
  message = "";
  name="";
  audioSuccess = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-55112/zapsplat_multimedia_alert_simple_basic_warm_soft_synth_complete_success_001_57875.mp3');
  audioError = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-55112/zapsplat_multimedia_alert_bright_warm_system_negative_error_001_57861.mp3')

  productTest(){
    if(this.barcodeInput.length > 3){
        console.log(this.barcodeInput)
        this.requestsService.getProductByBarcode(this.barcodeInput).subscribe(pro =>{
            this.product = pro;
            this.copyProduct = {...pro};
            this.existingProduct = true;
            this.audioSuccess.play();
        },(err)=>{
          console.log(err);
          if(err.status == 400){
            this.existingProduct = false;
            this.audioError.play();
          }
        })
    }
  }

  updatInput(){
    console.log(this.product.price + "---" + this.copyProduct.price)
    if(this.product.price != this.copyProduct.price || this.product.stock != this.copyProduct.stock){
      console.log("VVV")
      this.changes = true;
      }else{
        this.changes = false;
      }
  }

  saveChanges(){
    this.requestsService.updateProductById(this.product.id,{price:this.copyProduct.price,stock:this.copyProduct.stock}).subscribe(pro => {
      console.log(pro);
      this.message = "השינויים נשמרו בהצלחה!"
      setTimeout(()=>{
        this.message="";
       this.barcodeInput ="";
       this.changes = false;
      }
      ,1000)
    })
  }
  ngOnInit(): void {
  }
  public onDetect(result: string): void {
    alert(result);
  }

}
