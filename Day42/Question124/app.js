// Question 124: Create a function inside an object that returns the object's own
// name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object
//itself, making it straightforward to access its properties from within its methods.
var person = {
    name: "tehreem",
    getName: function () {
        // Using the 'this' keyword to refer to the object itself
        return this.name;
    },
};
// You can call the method to get the name property of the object
console.log(person.getName()); // Outputs: 'tehreem'
