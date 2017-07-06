
import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appFlowdown]'
})
export class FlowdownDirective {
  @HostBinding('class.open') opencheck= false;

  @HostListener('click') togOpen() {
    this.opencheck = !this.opencheck;
  }
}
