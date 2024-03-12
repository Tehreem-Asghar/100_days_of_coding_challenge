// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal 
//suffix to numbers. This introduces you to combining loops with conditional logic for formatting.
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_numbers.length; i++) {
    var order = "";
    if (ordinal_numbers[i] == 1) {
        order = 'st';
    }
    else if (ordinal_numbers[i] == 2) {
        order = 'nd';
    }
    else if (ordinal_numbers[i] == 3) {
        order = 'rd';
    }
    else {
        order = 'th';
    }
    console.log("".concat(ordinal_numbers[i], " ").concat(order));
}
