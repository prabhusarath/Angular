import {Component, Input, OnInit} from '@angular/core';
import {Recipes} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  finalsData: Recipes;
  id: number;

  constructor(private recs: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.finalsData = this.recs.getRecipeIndex(this.id);
        }
      );
  }

  OnAddShop() {
  this.recs.addIngtoShopList(this.finalsData.ingreds);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
