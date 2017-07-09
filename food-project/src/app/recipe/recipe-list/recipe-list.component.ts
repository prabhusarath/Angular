import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipes } from '../recipe.model'
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() debugEmitter = new EventEmitter<Recipes>();

  recipes: Recipes[];

  constructor(private recpServ : RecipeService) { }

  ngOnInit() {
  this.recipes = this.recpServ.getRecipes();
  }

  onRecpclicked(recli: Recipes){
    this.debugEmitter.emit(recli);
  }

}
