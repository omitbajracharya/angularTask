import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  //  @Input('cutsomLabel')
  //  public label:string = ''

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="red";
  }

}
