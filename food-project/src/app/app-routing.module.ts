import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingComponent} from './shopping/shopping.component';


const projRoutes: Routes = [
  {path: '', redirectTo: '/recipes'},
  { path: 'recipes', component: RecipeComponent},
  { path: 'shopping', component: ShoppingComponent}

];

@NgModule({
  imports: []
})
export class AppRoutingModule {

}
