import {Component, OnDestroy, OnInit} from '@angular/core';
import { Items } from '../Shared/items.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Items[];
  private subs: Subscription;

  constructor( private shopserv: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopserv.getIngreds();
    this.subs = this.shopserv.ingrchanged.
    subscribe(
      (ingredients: Items[]) => {
        this.ingredients = ingredients;
      }
    );
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
