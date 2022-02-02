import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() name: string = "";
  @Input() description: string = "";
  @Input() id: number = 0;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recipeClicked() {
    this.router.navigate(['/recipe/'+this.id]);
  }

}
