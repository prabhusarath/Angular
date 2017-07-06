import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive ({
  selector: '[appCustomDir]'
})
export class CustomdirDirective implements OnInit {
  constructor( private refs: ElementRef) {

  }

  ngOnInit() {
    this.refs.nativeElement.style.backgroundColor = 'yellow';
  }

}
