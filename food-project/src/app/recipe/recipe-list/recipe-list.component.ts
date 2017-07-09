import {Component, OnInit} from '@angular/core';
import { Recipes } from '../recipe.model'
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[];

  constructor(private recpServ : RecipeService) { }

  ngOnInit() {
  this.recipes = this.recpServ.getRecipes();
  }


}
