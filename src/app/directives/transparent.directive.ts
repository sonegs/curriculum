import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransparent]'
})
export class TransparentDirective {

  constructor( private el: ElementRef) {
// opacing the tech images
    el.nativeElement.style.filter = 'opacity(0)';
  }

  @HostListener('mouseenter') mouseOver() {
    this.el.nativeElement.style.filter = 'opacity(1)';
    console.log('se escucha el transparent');
  }
  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.filter = 'opacity(0.5)';
  }
}
