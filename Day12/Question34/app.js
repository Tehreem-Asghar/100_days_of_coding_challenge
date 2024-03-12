// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
// Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your 
//preference for each type. This demonstrates looping through an array and appending custom messages to each item.
var pizza = ["pepperoni", "margherita", "hawaiian"];
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var pizzas = pizza_1[_i];
    console.log("I like ".concat(pizzas, " pizza"));
}
console.log(" I really love pizza!");
