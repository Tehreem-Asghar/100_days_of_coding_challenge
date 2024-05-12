/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
function value(val) {
    return val;
}
console.log(value(100)); // Returns: 100 (number)
console.log(value("Tehreem")); // Returns: "Tehreem" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
var TypeArrowSyntax = function (val) { return val; };
console.log(TypeArrowSyntax(50)); // Returns: 50(number)
console.log(TypeArrowSyntax("Ayesha")); // Returns: "Ayesha" (string)
// Generic Function `testType`
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Tehreem"));
// Returns: "The Value Is Tehreem And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Arham", 100));
// Returns: "The First Value Is Arham And Second Value 100"
console.log(multipleTypes("Sarim", true));
// Returns: "The First Value Is Sarim And Second Value true"
