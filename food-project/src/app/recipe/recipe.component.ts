import { Component, OnInit } from '@angular/core';
import { Recipes } from  './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  displayData: Recipes;

  constructor() { }

  ngOnInit() {
  }

}
