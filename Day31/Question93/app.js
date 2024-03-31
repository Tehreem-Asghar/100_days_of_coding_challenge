// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
function findAndReplace(str) {
    //Find the index of "Banana" in the list
    var find = str.indexOf("banana");
    //Replace "Banana" with "Mango"
    str[find] = "Mango";
    console.log(str);
}
console.log(findAndReplace(["apple", "orang", "banana", "grapes"]));
