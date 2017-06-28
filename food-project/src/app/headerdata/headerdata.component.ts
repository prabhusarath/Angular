import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-headerdata',
  templateUrl: './headerdata.component.html'})
export class HeaderComponent {

  @Output() sel= new EventEmitter<string>();

  onSelect( optiond: string ) {
    this.sel.emit(optiond);
  }
}
