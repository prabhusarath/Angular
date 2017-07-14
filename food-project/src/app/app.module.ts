import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headerdata/headerdata.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import {FlowdownDirective} from './Shared/flowdown.directive';
import {ShoppingService} from './shopping/shopping.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { RecipeIntroComponent } from './recipe/recipe-intro/recipe-intro.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipe/recipe.service';
import {DataDbService} from './Shared/data.db.service';
import { SignupComponent } from './userauth/signup/signup.component';
import { SigninComponent } from './userauth/signin/signin.component';
import {AuthService} from './userauth/auth.service';
import {AuthProtect} from './userauth/auth-protect.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    FlowdownDirective,
    RecipeIntroComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService, DataDbService, AuthService, AuthProtect],
  bootstrap: [AppComponent]
})
export class AppModule { }
