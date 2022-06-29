import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project';
 
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
