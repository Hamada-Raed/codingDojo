var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]) 
var pizza3 = pizzaOven ("Cheese Crust Pizza","Buffalo Sauce","Cheddar",["mushrooms", "olives", "onions"])
var pizza4 = pizzaOven ("Cheese Crust Pizza","Italian Classics","Yellow Cheesee",["mushrooms", "olives", "onions"]) 
// function to create the list of pizza 
function pizzaOven(crustType, sauceType, cheeses ,toppings){
    var pizza = {}
    pizza.crustType = crustType; 
    pizza.sauceType = sauceType; 
    pizza.cheeses = cheeses ;
    pizza.toppings = toppings;
    return pizza;
}
// Random function to create a random flavor of a specific type of pizza  

function randomPizza (pizza){
    var randomNum = Math.floor(Math.random() * 4) + 1;
    console.log("The random type of pizza is pizza " + randomNum);
}
randomPizza();




