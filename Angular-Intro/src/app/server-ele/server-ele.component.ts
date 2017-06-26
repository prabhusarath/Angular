import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-ele',
  templateUrl: './server-ele.component.html',
  styleUrls: ['./server-ele.component.css']
})
export class ServerEleComponent implements OnInit {

  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
