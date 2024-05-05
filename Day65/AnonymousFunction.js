console.log("\n ********** Anonymous Function *************\n");
var cook_food = function (item1, item2) {
    if (item2 !== undefined) {
        return " your ".concat(item1, " And ").concat(item2, " is ready");
    }
    else {
        return " ".concat(item1, "  is ready");
    }
};
console.log(cook_food("biryani", "kabab")); // use both argument
console.log(cook_food("Sandwich")); // use one argument
