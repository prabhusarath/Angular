import {Recipes} from './recipe.model';
import { Injectable} from '@angular/core';
import {Items} from '../Shared/items.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipechanged = new Subject<Recipes[]>();

  private repes: Recipes[] = [
    new Recipes('Sambar',
      'Lentil soup cooked with vegetables and a blend of south Indian spices (masala). Usually taken with rice, idli, dosa, pongal or upma.',
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sambaar_kadamba.jpg',
      [
        new Items( 'Lentils', 2),
        new Items( 'Onions', 2),
        new Items( 'Tomato', 2),
        new Items( 'Dal', 2)
      ]
    ),
    new Recipes('Aloo shimla mirch',
      'Green capsicum with potatoes sauted with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder and garam masala',
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Spicy_alloo_with_tadka_mirchi.jpg',
      [
        new Items( 'Aloo', 10),
        new Items( 'capsicum', 5)
      ]
    ),
    new Recipes('Biryani',
      'Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.',
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Pulao-indian-rice-4.jpg',
      [
        new Items( 'Meat', 10),
        new Items( 'Rice', 5)
      ]
    ),
    new Recipes('Jalebi',
      'A North Indian twisted noodle like sweet dish dipped in sugary syrup',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/JalebiIndia.jpg/800px-JalebiIndia.jpg',
      [
        new Items( 'Sugar', 10)
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
