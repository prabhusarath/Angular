import { Component, OnInit } from '@angular/core';
import { Recipes } from  './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  displayData: Recipes;

  constructor() { }

  ngOnInit() {
  }

}
