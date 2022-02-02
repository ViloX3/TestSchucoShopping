import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  private name: string = "";
  private description: string = "";
  private details: string = "";
  private ingredients: string = "";

  constructor(private recipeService: recipeService, 
    private route: ActivatedRoute) { 
    
  }

  ngOnInit( ): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.recipeService.getRecipeById(+id)!.name;
    this.description = this.recipeService.getRecipeById(+id)!.description;
    this.details = this.recipeService.getRecipeById(+id)!.details;
    this.ingredients = this.recipeService.getRecipeById(+id)!.ingredients;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getDetails() {
    return this.details;
  }
  
  getIngredients() {
    return this.ingredients;
  }
}
