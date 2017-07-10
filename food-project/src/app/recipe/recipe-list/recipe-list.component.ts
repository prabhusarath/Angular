import {Component, OnInit} from '@angular/core';
import { Recipes } from '../recipe.model'
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[];

  constructor(private recpServ : RecipeService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
  this.recipes = this.recpServ.getRecipes();
  }

  onNewFood() {
    this.router.navigate(['new'], { relativeTo: this.route})
  }



}
