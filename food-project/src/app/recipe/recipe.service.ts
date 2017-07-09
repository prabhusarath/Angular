import {Recipes} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Items} from '../Shared/items.model';
import {ShoppingService} from '../shopping/shopping.service';

@Injectable()
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

  addIngtoShopList(items: Items[]) {
    this.Shops.addsIns(items);
  }
}
