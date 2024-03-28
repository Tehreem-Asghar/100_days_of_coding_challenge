// Question 80: Updating Object Properties: Add a property named color to the existing car object, an
var carObj = {
    make: "Toyota",
    model: "corolla",
    year: 2020,
};
console.log(carObj); // before
carObj["color"] = "blue"; // add a property 'color'
carObj.year = 2021; //Updates the 'year' property
console.log(carObj); // after add and update
