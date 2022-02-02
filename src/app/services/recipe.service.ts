import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class recipeService {

    private recipeList = [{
        id: 0,
        name: "Pancakes",
        description: "Thin, flat, circular piece of heaven.",
        ingredients: "2 eggs, 400g of white flour",
        details: "sdqsdf"
    },
    {
        id: 1,
        name: "Brownies",
        description: "Chocolat gourmet cake. For lovers.",
        ingredients: "200g of black chocolat, 400g of white flour",
        details: "sdcxv"
    },
    {
        id:2,
        name: "Cheesecake",
        description: "Creamy, silky, and smooth cake made with love.",
        ingredients: "2 eggs, 400g of white flour, 500g of cottage cheese",
        details: "azen"
    },
    {
        id:3,
        name: "Cookies",
        description: "The only recipe you'll need to make cookies.",
        ingredients: "2 eggs, 400g of white flour",
        details: "wvxwcv"
    },
    {
        id:4,
        name: "Apple pie",
        description: "Easy, no-fail, buttery and flaky homemade pie crust.",
        ingredients: "2 eggs, 400g of white flour, 300g of apple",
        details: "wsdgqe"
    },
    {
        id:5,
        name: "Milkshake",
        description: "Create your own smooth and creamy drink.",
        ingredients: "500ml of milk",
        details: "fezf"
    }];
    recipeListSubject = new Subject<any[]>();

    constructor() {

    }

    emitRecipeListSubject() {
        this.recipeListSubject.next(this.recipeList.slice());
    }

    getRecipeById(id: number) {
        const recipe = this.recipeList.find(
          (s) => {
            return s.id === id;
          }
        );
        return recipe;
    }
    


}