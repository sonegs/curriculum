import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnshadows]'
})
export class UnshadowsDirective {

  constructor( private el: ElementRef) {
// shadows the tech images
    console.log('directive');
    el.nativeElement.style.filter = 'grayscale(100%)';
  }

  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.filter = 'grayscale(0%)';
  }
  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.filter = 'grayscale(100%)';
  }
}
