import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('Test Recpie', 'Tested', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5R8eew150BLceH7KcrkHXGg2Htncj1GRePaeKwjabppVVUPt')
  ];

  constructor() { }

  ngOnInit() {
  }

}
