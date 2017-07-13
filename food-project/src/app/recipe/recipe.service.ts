import {Recipes} from './recipe.model';
import { Injectable} from '@angular/core';
import {Items} from '../Shared/items.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipechanged = new Subject<Recipes[]>();

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
        new Items( 'meat', 10),
        new Items( 'Pork', 5)
      ]
    ),
    new Recipes('Test Recipe',
      'Tested',
      'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg',
      [
        new Items( 'Milk', 10),
        new Items( 'Honey', 5)
      ]
    )
  ];

  constructor(private Shops: ShoppingService){

  }


  getRecipes() {
    return this.repes.slice();
  }

  getRecipeIndex(index: number) {
    return this.repes[index];
  }

  addIngtoShopList(items: Items[]) {
    this.Shops.addsIns(items);
  }

  addRecipes (recipe: Recipes) {
    this.repes.push(recipe);
    this.recipechanged.next(this.repes.slice());
  }

  updateRecipes (index: number, newRecipe: Recipes) {
    this.repes[index] = newRecipe;
    this.recipechanged.next(this.repes.slice());
  }

  deleteRecipe(index: number) {
  this.repes.splice(index, 1);
  this.recipechanged.next(this.repes.slice());

  }

  setRecipes(rec: Recipes[]) {
    this.repes = rec;
    this.recipechanged.next(this.repes.slice());
  }
}
