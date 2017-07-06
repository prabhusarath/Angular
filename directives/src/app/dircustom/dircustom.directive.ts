import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDircustom]'
})
export class DircustomDirective implements OnInit {

  constructor(private refs: ElementRef, private rend: Renderer2) { }

  ngOnInit() {
    this.rend.setStyle(this.refs.nativeElement, 'background-color', 'blue');
  }

}
