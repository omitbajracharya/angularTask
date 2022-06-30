import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  msg!:string;
  constructor() { }

  ngOnInit(): void {
  }

  onAddCart(event:any){
    console.log(event);
  this.msg = event.target.value + " Added in cart";
  }

}
