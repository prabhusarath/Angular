import {Recipes} from './recipe.model';

export class RecipeService {

  private recipes: Recipes[] = [
    new Recipes('Test Recpie', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg'),
    new Recipes('Biriryani Recpie', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg'),
    new Recipes('Channa Recpie', 'dafda', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
