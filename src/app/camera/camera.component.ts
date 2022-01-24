import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {


  
  constructor() { }
  public onDetect(result: string): void {
    alert(result);
  }
  ngOnInit(): void {  }

  
}
