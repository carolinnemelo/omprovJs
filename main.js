import { Chef } from "./Chef.js";
import { Recipe } from "./Recipe.js";

const chef1 = new Chef("Tiago Castanho");
const chef2 = new Chef("Saulo Simões");
const chef3 = new Chef("Carolinne Melo");

const recipe1 = new Recipe("Moqueca Paraense", "Medium");
const recipe2 = new Recipe("Peixe com creme de castanha do Pará", "High");
const recipe3 = new Recipe("Tapioca com ovo", "Low");

chef1.learnRecipe(recipe1);
chef1.learnRecipe(recipe2);

chef2.learnRecipe(recipe2);


chef3.learnRecipe(recipe3);


chef1.listRecipes(); 
chef2.listRecipes(); 
chef3.listRecipes(); 

recipe1.getRecipeInfo(); 
recipe2.getRecipeInfo(); 
recipe3.getRecipeInfo(); 

