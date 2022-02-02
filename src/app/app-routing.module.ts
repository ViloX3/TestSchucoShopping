import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SingleRecipeComponent } from './components/single-recipe/single-recipe.component';

const routes: Routes = [
  { path: 'shopping', component: ShoppingListComponent},
  { path: 'recipe', component: RecipeBookComponent},
  { path: 'recipe/:id', component: SingleRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
