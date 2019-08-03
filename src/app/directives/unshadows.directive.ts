import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnshadows]'
})
export class UnshadowsDirective {

  constructor( private el: ElementRef) {
// shadows the tech images
    el.nativeElement.style.filter = 'grayscale(100%)';
  }

  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.filter = 'grayscale(0%)';
    console.log('se escucha el unshadow');
  }
  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.filter = 'grayscale(100%)';
  }
}
