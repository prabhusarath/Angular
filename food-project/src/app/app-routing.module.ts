import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeIntroComponent} from './recipe/recipe-intro/recipe-intro.component';


const projRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeComponent, children: [
    { path: '', component: RecipeIntroComponent }
  ] },
  { path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(projRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
