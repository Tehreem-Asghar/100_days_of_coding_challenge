// Question 126: Explain how the this keyword changes its value when used inside
//a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's
//method, it does not refer to the object itself but to the global object
//(in a browser, window). This behavior often requires workarounds like assigning
// this to another variable in the outer function.

const person = {
  name: "tehreem",
  outerMethod: function () {
    console.log(this.name); // Outputs: "tehreem", refers to person.name

    const nestedFunction = () => {
      console.log(this.property); // Will output `undefined` because person doesn't have a 'property' attribute.
    };
    nestedFunction();
  },
};

person.outerMethod(); // This will execute the code above and show "tehreem" followed by `undefined`.
