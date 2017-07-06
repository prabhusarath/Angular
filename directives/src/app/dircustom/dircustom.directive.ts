import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDircustom]'
})
export class DircustomDirective implements OnInit {
   @HostBinding('style.backgroundColor') bColor: string = 'transparent';

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
    this.bColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'white');
    this.bColor = 'green';
  }

  constructor(private refs: ElementRef, private rend: Renderer2) { }

  ngOnInit() {
   // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
  }

}
