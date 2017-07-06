import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive ({
  selector: '[customDir]'
})
export class CustomdirDirective implements OnInit {
  constructor( private refs: ElementRef) {

  }

  ngOnInit() {
    this.refs.nativeElement.style.backgroundColor = 'yellow';
  }

}
