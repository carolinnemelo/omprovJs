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
        console.log(this._fullname+ ': ' + this._recipes.map(e => e._name).join(', '))
    }
}

export { Chef }