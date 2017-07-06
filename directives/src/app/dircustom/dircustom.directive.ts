import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDircustom]'
})
export class DircustomDirective implements OnInit {

  @Input() def: string = 'white';
  @Input() colrChange: string = 'purple';

   @HostBinding('style.backgroundColor') bColor: string ;

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
    this.bColor = this.colrChange;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'white');
    this.bColor = this.def;
  }

  constructor(private refs: ElementRef, private rend: Renderer2) { }

  ngOnInit() {

    this.bColor = this.def;
   // this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
  }

}
