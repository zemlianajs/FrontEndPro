class Bulka{
    constructor(name, size, ingredients){
        this.name = name;
        this.size = size;
        ingredients = [`cutlet`, `salada`, `tomato`];
        this.ingredients = ingredients;
    }
    setAdditionalIngredients(...AdditionalIngredients){
        return this.ingredients = this.ingredients.concat(AdditionalIngredients);
    }
}

let Humburger = new Bulka(`Humburger`, `small`);
Humburger.setAdditionalIngredients(`egg`, `onion`);

class Cheeseburger extends Bulka{
    constructor(name, size, ingredients){
        super(name, size, ingredients);
        this.ingredients.push(`cheese`)
    }
}

let myCheeseburger = new Cheeseburger(`Cheeseburger`, `small`);
myCheeseburger.setAdditionalIngredients(`egg`, `onion`);

console.log(Humburger)
console.log(myCheeseburger)
