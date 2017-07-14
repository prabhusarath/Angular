import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeIntroComponent} from './recipe/recipe-intro/recipe-intro.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {SignupComponent} from "./userauth/signup/signup.component";
import {SigninComponent} from "./userauth/signin/signin.component";
import {AuthProtect} from "./userauth/auth-protect.service";


const projRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeComponent, children: [
    { path: '', component: RecipeIntroComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthProtect] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthProtect] }
  ] },
  { path: 'shopping', component: ShoppingComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(projRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
