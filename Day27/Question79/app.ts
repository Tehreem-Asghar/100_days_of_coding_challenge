//Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

//Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.

// here I make a structure and defined types of obj
type Car = {
  make: string;
  model: string;
  year: number;
};

let carObj: Car = {
  make: "Toyota",
  model: "corolla",
  year: 2020,
};
// we can Access our obj property keys two types 1).nation  and 2)array[]nation
console.log(carObj.model); //like this .nation
console.log(carObj["year"]); // like this Array[]nation
