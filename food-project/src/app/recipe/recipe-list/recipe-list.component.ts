import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('Test Recpie', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg'),
    new Recipes('Biriryani Recpie', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
