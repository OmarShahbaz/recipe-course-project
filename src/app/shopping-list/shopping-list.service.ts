import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients:Ingredient[]=[new Ingredient('Onion',50), new Ingredient('Tomoto',50)];

    getIngredients(){
        //copy of ingredients array, not the original array stored in this service
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}