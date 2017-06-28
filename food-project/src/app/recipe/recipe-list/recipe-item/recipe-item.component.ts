import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Recipes } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recpos: Recipes;

  @Output() recpclicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelfunc(){
    this.recpclicked.emit();
  }

}
