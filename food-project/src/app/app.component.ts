import {Component, OnInit} from '@angular/core';
import * as fires from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedOption = 'Recipes';

  onSelection(feats: string) {
    this.loadedOption = feats;
  }

  ngOnInit() {
  }

}

