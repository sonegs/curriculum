import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnshadows]'
})
export class UnshadowsDirective {

  // shadows the tech images changing the css style of the element selected. This effect would do with CSS but i show something new

  constructor( private el: ElementRef) {

    el.nativeElement.style.filter = 'grayscale(100%)';

  }

  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.filter = 'grayscale(0%)';

  }
  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.filter = 'grayscale(100%)';

  }
}
