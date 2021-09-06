import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightEvent]'
})
export class HighlightEventDirective {

  @Input() color:string = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.color ? this.color:'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
