// Question 129: Explain how this behaves differently in arrow functions compared
// to traditional functions.
var _this = this;
// Explain & TIP: In traditional functions, this refers to the object that called
// the function, which can vary depending on the context. In arrow functions,
// this is lexically bound, meaning it uses this from the code that contains the
// arrow function
var traditional_Vs_Arrow = {
    // Define a property `value` with the string "tehreem"
    value: "tehreem",
    // Define a traditional function
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    // Define an arrow function
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
// Call the traditional function
// This logs the value of `value` from the `traditional_Vs_Arrow` object ("tehreem")
traditional_Vs_Arrow.traditionalFunction();
// Call the arrow function
// This logs `undefined` because the arrow function does not bind `this` to the `traditional_Vs_Arrow` object
traditional_Vs_Arrow.arrowFunction();
