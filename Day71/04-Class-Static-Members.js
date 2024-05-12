/************************
 * CLASS STATIC MEMBERS *
 ************************/
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        console.log(num1 + num2);
    };
    MathOperations.subs = function (num1, num2) {
        console.log(num1 - num2);
    };
    MathOperations.pi = Math.PI;
    return MathOperations;
}());
// we can access property without instance object
console.log(MathOperations.pi); // output : 3.141
MathOperations.add(10, 15); // output : 25
MathOperations.subs(15, 10); // output : 5
