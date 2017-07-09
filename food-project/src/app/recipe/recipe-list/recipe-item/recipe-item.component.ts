import {Component, Input, OnInit} from '@angular/core';

import { Recipes } from '../../recipe.model'
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recpos: Recipes;

  constructor(private recService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelfunc(){
    this.recService.recipeSelc.emit(this.recpos);
  }

}
