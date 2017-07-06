import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDircustom]'
})
export class DircustomDirective implements OnInit {

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.rend.setStyle(this.refs.nativeElement, 'background-color', 'white');
  }

  constructor(private refs: ElementRef, private rend: Renderer2) { }

  ngOnInit() {
   // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
  }

}
