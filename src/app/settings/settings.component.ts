import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private requestsService:RequestsService) { }

  ngOnInit(): void {
  }

  newType(nameType:any){
    this.requestsService.newType({name:nameType}).subscribe(name=>{
      console.log(name);
      
    })
  }

  newProvider(newProvider:any){
    this.requestsService.newProvider({name:newProvider}).subscribe(name=>{
      console.log(name)
    })
  }
}
