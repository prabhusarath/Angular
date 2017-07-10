"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var items_model_1 = require("../Shared/items.model");
var core_1 = require("@angular/core");
var ShoppingService = (function () {
    function ShoppingService() {
        this.ingrchanged = new core_1.EventEmitter();
        this.ingredients = [
            new items_model_1.Items('Tomato', 10),
            new items_model_1.Items('Onions', 5)
        ];
    }
    ShoppingService.prototype.getIngreds = function () {
        return this.ingredients.slice();
    };
    ShoppingService.prototype.addIngredients = function (ings) {
        this.ingredients.push(ings);
        this.ingrchanged.emit(this.ingredients.slice());
    };
    ShoppingService.prototype.addsIns = function (ingdItems) {
        (_a = this.ingredients).push.apply(_a, ingdItems);
        this.ingrchanged.emit(this.ingredients.slice());
        var _a;
    };
    return ShoppingService;
}());
__decorate([
    core_1.Output()
], ShoppingService.prototype, "ingrchanged", void 0);
exports.ShoppingService = ShoppingService;
