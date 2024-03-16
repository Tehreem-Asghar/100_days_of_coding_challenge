// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an
//indefinite number of arguments, useful for handling lists of data 
//like sandwich ingredients.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var sandwich_1 = items_1[_a];
        console.log(" sandwich order: ".concat(sandwich_1));
    }
    console.log("enjoy your order");
}
sandwich("sandwich", "tomato", "mayo");
sandwich("ham", "cheese");
sandwich("mustard");
