import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output() ServerCreate = new EventEmitter<{ newServerName: string, newServerContent: string}>();
  @Output() BlueprintCreate = new EventEmitter<{ newServerName: string, newServerContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.ServerCreate.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.BlueprintCreate.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent
    });
  }

}
