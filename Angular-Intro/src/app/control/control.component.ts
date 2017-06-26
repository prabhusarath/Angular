import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {


  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // this.serverElemnts.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElemnts.push({
    //   type: 'Blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }




}
