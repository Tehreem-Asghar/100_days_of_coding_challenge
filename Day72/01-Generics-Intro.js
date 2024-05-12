/******************
 * GENERICS INTRO *
 ******************/
function value(item) {
    return item;
}
// Usage of the generic function with different types
var num = value(50);
console.log(num);
var string = value('tehreem');
console.log(string);
var boolean = (true);
console.log(boolean);
var arrValue = value([1, 2, 3, 4]);
console.log(arrValue);
