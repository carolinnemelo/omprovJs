// 9 (4p)
// Du ska skapa två klasser med ES6 syntax, Chef och Recipe.

// Klassen Chef ska ha följande egenskaper:
// fullname, recipes (en array med kurser som är tom från början)
// och metoden 
// learnRecipes() som lägger till ett recept i recipes-arrayen
// listRecipes() som visar en lista på kockens recept

// Klassen Recipe ska ha följande egenskaper:
// name, difficulty 
// och metoderna
// getRecipeInfo() som visar information om kursen

// Din kod här: 


// Klassen Chef

class Chef {
    constructor(fullname, recipes) {
        this._fullname = fullname;
        this._recipes = [];

    }

    get fullname() {
        return this._fullname;
    }


    get recipes() {
        return this._recipes;
    }

    learnRecipe(newRecipe){
        this._recipes.push(newRecipe);
    }

    listRecipes() {
        console.log(this._recipes.map(e => e._name).join(', '))
    }
}


// Klassen Recipe


class Recipe {
    constructor(name, difficulty) {
        this._name = name;
        this._difficulty = difficulty;

    }

    getRecipeInfo() {
        console.log(`${this._name}, Difficulty: ${this._difficulty}`)
    }
}





// Test
const chef1 = new Chef("Gordon Ramsay");
const chef2 = new Chef("Jamie Oliver");
const chef3 = new Chef("Nigella Lawson");

const recipe1 = new Recipe("Beef Wellington", "High");
const recipe2 = new Recipe("Roast Chicken", "Medium");
const recipe3 = new Recipe("Chocolate Cake", "Low");

chef1.learnRecipe(recipe1);
chef1.learnRecipe(recipe2);
chef2.learnRecipe(recipe2);
chef3.learnRecipe(recipe3);


chef1.listRecipes(); // Beef Wellington, Roast Chicken
chef2.listRecipes(); // Roast Chicken
chef3.listRecipes(); // Chocolate Cake

recipe1.getRecipeInfo(); // Expected to log: "Beef Wellington, Difficulty: High"
recipe2.getRecipeInfo(); // Expected to log: "Roast Chicken, Difficulty: Medium"
recipe3.getRecipeInfo(); // Expected to log: "Chocolate Cake, Difficulty: Low"
