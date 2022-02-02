import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { recipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  recipeList: any;
  recipeListSubscription: Subscription = new Subscription;

  constructor(private recipeService: recipeService) { }

  ngOnInit(): void {
    this.recipeListSubscription = this.recipeService.recipeListSubject.subscribe(
      (recipeList: any[]) => {
        this.recipeList = recipeList;
      }
    );
    this.recipeService.emitRecipeListSubject();
  }
}
