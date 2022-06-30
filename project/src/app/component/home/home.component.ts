import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name:string="twoWayBinding"
  public test:boolean =true;
  public readonly sub:string;
  public val!:string;
  public list:Array<string> = ['A','B','C'];

  constructor(){ 
    this.sub = "angular"
  }

  ngOnInit(): void {
    this.val = "xyz"
  }

}
