import { Component, OnInit } from '@angular/core';
import { Items } from '../Shared/items.model';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Items[] = [
    new Items( 'Tomato', 10),
    new Items( 'Onions', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngAdded(ing: Items){
    this.ingredients.push(ing)
  }

}
