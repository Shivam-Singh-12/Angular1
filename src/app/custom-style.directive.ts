import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "green"
    el.nativeElement.style.border = "2px solid yellow"
    el.nativeElement.style.textAlign = "center"
  }

}
