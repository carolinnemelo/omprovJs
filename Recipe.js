class Recipe {
    constructor(name, difficulty) {
        this._name = name;
        this._difficulty = difficulty;

    }

    getRecipeInfo() {
        console.log( `${this._name}, Difficulty: ${this._difficulty}`)
    }
}


export { Recipe }