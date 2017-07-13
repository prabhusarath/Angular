import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipe/recipe.service";
import {Recipes} from "../recipe/recipe.model";
import 'rxjs/add/operator/map';


@Injectable()
export class DataDbService {
  constructor(private http: Http, private recpServ: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://ng-food-journal.firebaseio.com/recipes.json', this.recpServ.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://ng-food-journal.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recp: Recipes[] = response.json();
          for (let rep of recp) {
            if (!rep['ingreds']) {
              console.log(rep);
              rep['ingreds'] = [];
            }
          }
          return recp;
        }
      )
      .subscribe(
        (recipes: Recipes[]) => {
          this.recpServ.setRecipes(recipes);
        }
      );
  }
}
