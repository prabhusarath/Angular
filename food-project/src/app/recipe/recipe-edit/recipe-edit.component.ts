import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from '../recipe.service';
import {Recipes} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editm = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recpServ: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editm = params['id'] != null;
          this.initForm();
        }
      );
  }

  onAddIns() {
    (<FormArray>this.recipeForm.get('ingreds')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onSubmit() {
    if (this.editm) {
      this.recpServ.updateRecipes(this.id, this.recipeForm.value);
    } else {
      this.recpServ.addRecipes(this.recipeForm.value);
    }
    this.onCancel();
  }


  private initForm() {

    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    let recipeIngds = new FormArray([]);

    if (this.editm) {
      const recipe = this.recpServ.getRecipeIndex(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imgspaths;
      recipeDesc = recipe.desc;
      if(recipe['ingreds']) {
        for(let indxs of recipe.ingreds){
          recipeIngds.push(
            new FormGroup({
              'name': new FormControl(indxs.name, Validators.required),
              'quantity': new FormControl(indxs.quantity, [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgspaths': new FormControl(recipeImg, Validators.required),
      'desc': new FormControl(recipeDesc, Validators.required),
      'ingreds': recipeIngds
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingreds')).controls;
  }

  onCancel() {
    this.router.navigate (['../'],{ relativeTo: this.route})
  }

  onDelItems(index: number) {
    (<FormArray>this.recipeForm.get('ingreds')).removeAt(index);
  }

}
