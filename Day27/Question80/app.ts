// Question 80: Updating Object Properties: Add a property named color to the existing car object, an

// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.

// here I make a structure and defined types of obj

type car = {
  make: string;
  model: string;
  year: number;
};
let carObj: car = {
  make: "Toyota",
  model: "corolla",
  year: 2020,
};

console.log(carObj);// before

carObj["color"] = "blue"; // add a property 'color'
carObj.year = 2021; //Updates the 'year' property

console.log(carObj);// after add and update
