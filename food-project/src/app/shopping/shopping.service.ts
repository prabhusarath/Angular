import {Items} from '../Shared/items.model';
import {EventEmitter, Output} from '@angular/core';
export class ShoppingService {

  @Output() ingrchanged = new EventEmitter<Items[]>();

  private ingredients: Items[] = [
  new Items( 'Tomato', 10),
  new Items( 'Onions', 5)
];

  getIngreds() {
    return this.ingredients.slice();
  }

  addIngredients(ings: Items) {
    this.ingredients.push(ings);
    this.ingrchanged.emit(this.ingredients.slice());
  }

  addsIns(ingdItems: Items[]) {
    this.ingredients.push(...ingdItems);
    this.ingrchanged.emit(this.ingredients.slice());
  }
}
