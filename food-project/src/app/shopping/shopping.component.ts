import { Component, OnInit } from '@angular/core';
import { Items } from '../Shared/items.model';
import {ShoppingService} from "./shopping.service";


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Items[];

  constructor( private shopserv: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopserv.getIngreds();
    this.shopserv.ingrchanged.
    subscribe(
      (ingredients: Items[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
