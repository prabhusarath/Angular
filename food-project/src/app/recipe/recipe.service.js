"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var recipe_model_1 = require("./recipe.model");
var core_1 = require("@angular/core");
var items_model_1 = require("../Shared/items.model");
var RecipeService = (function () {
    function RecipeService(Shops) {
        this.Shops = Shops;
        this.recipeSelc = new core_1.EventEmitter();
        this.repes = [
            new recipe_model_1.Recipes('Test Recipe', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg', [
                new items_model_1.Items('Tomato', 10),
                new items_model_1.Items('Onions', 5)
            ]),
            new recipe_model_1.Recipes('Test Recipe', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg', [
                new items_model_1.Items('meat', 10),
                new items_model_1.Items('Pork', 5)
            ]),
            new recipe_model_1.Recipes('Test Recipe', 'Tested', 'https://c1.staticflickr.com/4/3624/3717666449_d546391954_b.jpg', [
                new items_model_1.Items('Milk', 10),
                new items_model_1.Items('Honey', 5)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.repes.slice();
    };
    RecipeService.prototype.getRecipeIndex = function (index) {
        return this.repes[index];
    };
    RecipeService.prototype.addIngtoShopList = function (items) {
        this.Shops.addsIns(items);
    };
    return RecipeService;
}());
RecipeService = __decorate([
    core_1.Injectable()
], RecipeService);
exports.RecipeService = RecipeService;
