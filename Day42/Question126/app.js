// Question 126: Explain how the this keyword changes its value when used inside
//a nested function within a method.
// Explain & TIP: When this is used inside a nested function within an object's
//method, it does not refer to the object itself but to the global object
//(in a browser, window). This behavior often requires workarounds like assigning
// this to another variable in the outer function.
var person = {
    name: "tehreem",
    outerMethod: function () {
        var _this = this;
        console.log(this.name); // Outputs: "tehreem", refers to person.name
        var nestedFunction = function () {
            console.log(_this.property); // Will output `undefined` because person doesn't have a 'property' attribute.
        };
        nestedFunction();
    },
};
person.outerMethod(); // This will execute the code above and show "tehreem" followed by `undefined`.
