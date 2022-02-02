import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { shoppingService } from './services/shopping.service';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { recipeService } from './services/recipe.service';
import { SingleRecipeComponent } from './components/single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingItemComponent,
    RecipeItemComponent,
    SingleRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    shoppingService,
    recipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
