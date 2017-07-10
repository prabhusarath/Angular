import {Items} from '../Shared/items.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService {

  ingrchanged = new Subject<Items[]>();

  private ingredients: Items[] = [
  new Items( 'Tomato', 10),
  new Items( 'Onions', 5)
];

  getIngreds() {
    return this.ingredients.slice();
  }

  addIngredients(ings: Items) {
    this.ingredients.push(ings);
    this.ingrchanged.next(this.ingredients.slice());
  }

  addsIns(ingdItems: Items[]) {
    this.ingredients.push(...ingdItems);
    this.ingrchanged.next(this.ingredients.slice());
  }
}
