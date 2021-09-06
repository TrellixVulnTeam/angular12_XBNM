import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
