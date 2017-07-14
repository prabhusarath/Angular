import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipe/recipe.service";
import {Recipes} from "../recipe/recipe.model";
import 'rxjs/add/operator/map';
import {AuthService} from "../userauth/auth.service";


@Injectable()
export class DataDbService {
  constructor(private http: Http, private recpServ: RecipeService, private authServ: AuthService) {
  }

  storeRecipes() {
    const toks = this.authServ.getTok();
    return this.http.put('https://ng-food-journal.firebaseio.com/recipes.json?auth=' + toks, this.recpServ.getRecipes());
  }

  fetchRecipes() {
    const toks = this.authServ.getTok();

    this.http.get('https://ng-food-journal.firebaseio.com/recipes.json?auth=' + toks)
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
