import {Items} from '../Shared/items.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService {

  ingrchanged = new Subject<Items[]>();
  editchanged = new Subject<number>();

  private ingredients: Items[] = [
  new Items( 'Tomato', 10),
  new Items( 'Onions', 5)
];

  getIngreds() {
    return this.ingredients.slice();
  }

  getIngindexs(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ings: Items) {
    this.ingredients.push(ings);
    this.ingrchanged.next(this.ingredients.slice());
  }

  addsIns(ingdItems: Items[]) {
    this.ingredients.push(...ingdItems);
    this.ingrchanged.next(this.ingredients.slice());
  }

  updates(index: number, newIngredient: Items) {
    this.ingredients[index] = newIngredient;
    this.ingrchanged.next(this.ingredients.slice());
  }


}
