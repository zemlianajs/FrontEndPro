const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee{
    constructor(obj){
        Object.assign(this, obj)
    }

    makeCoffee(){
        return `<div class="cup">
                <div class="coffee">
                ${this.divIngredients()}
                </div>
                <p class="${this.title}">${this.title}</p>
            </div>`
        
    }
    divIngredients(){
        let ingredient = [];
        for(let key in this.ingredients){
            ingredient.push( `<p style="height: ${this.ingredients[key]}%" class="ingredient ${key.replaceAll(` `,`__`)}">${key}</p>` )
        }
       
         return `<div class="coffee__ingredients">${ingredient.join(``)}</div>`  
    }
}

class Espresso extends Coffee{
    constructor(obj){
        super(obj);
    }

    makeCoffee(){
        let CoffeeResult = super.makeCoffee();

        return CoffeeResult.replaceAll(`class="coffee"`, `class="coffee coffee--espresso"`)
    }
}

class EspressoMilk extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let CoffeeResult = super.makeCoffee();

        return CoffeeResult.replaceAll(`class="coffee"`, `class="coffee coffee--espressoMilk"`)
    }
}

class Alcoholic extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let CoffeeResult = super.makeCoffee();

        return CoffeeResult.replaceAll(`class="coffee"`, `class="coffee coffee--alcoholic"`)
    }
}

class Dessert extends Coffee{
    constructor(obj){
        super(obj);
    }
    makeCoffee(){
        let CoffeeResult = super.makeCoffee();

        return CoffeeResult.replaceAll(`class="coffee"`, `class="coffee coffee--dessert"`)
    }
}

const CLASS_COFFEE = {
    Espresso: type => new Espresso(type),
    EspressoMilk: type => new EspressoMilk(type),
    Alcoholic: type => new Alcoholic(type),
    Dessert: type => new Dessert(type)
}


let renderCoffee = Object.entries(COFFEE_TYPES)
    .map(([key, value]) => value
        .map(type => CLASS_COFFEE[key] ? CLASS_COFFEE[key](type) : new Coffee(type)))
    .map(coffee => coffee
        .map(objCoffee => objCoffee.makeCoffee())
        .join(``))
    
    
document.write(`<section class="cups">${renderCoffee.join(``)}</section>`)




