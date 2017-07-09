import {Recipes} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Items} from '../Shared/items.model';


export class RecipeService {

  recipeSelc = new EventEmitter<Recipes>();

  private repes: Recipes[] = [
    new Recipes('Test Recipe',
      'Tested',
      'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg',
      [
        new Items( 'Tomato', 10),
        new Items( 'Onions', 5)
      ]
    ),
    new Recipes('Test Recipe',
      'Tested',
      'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg',
      [
        new Items( 'Tomato', 10),
        new Items( 'Onions', 5)
      ]
    )
  ];

  getRecipes() {
    return this.repes.slice();
  }
}
