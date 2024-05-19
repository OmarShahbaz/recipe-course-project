import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Salad', 'Cucumber, Onion, Tomato, Carrot, Lemon', 'https://i.pinimg.com/564x/eb/ef/ac/ebefac8fa2e38ef7eedfd5325365ba6a.jpg', [new Ingredient('Meat', 1), new Ingredient('Fries', 15)]),
        new Recipe('Macroni', 'Cucumber, Onion, Tomato, Carrot, Lemon', 'https://i.pinimg.com/564x/eb/ef/ac/ebefac8fa2e38ef7eedfd5325365ba6a.jpg',[new Ingredient('Mac', 20), new Ingredient('Carrot', 2)])
        ];

        constructor(private slService : ShoppingListService){}

        getRecipes(){
            //get a copy of recipe array
            return this.recipes.slice();
        }

        getRecipe(index:number){
            return this.recipes[index];
        }

        addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);
        }
}