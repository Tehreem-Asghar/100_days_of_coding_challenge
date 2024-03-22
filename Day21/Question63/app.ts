// Question 63: Shape Shifter: Write a program that can describe either a circle
// or a rectangle using a special type alias, including properties unique to each
// shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut
// for describing more complex information, such as the details of different shapes.

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; 
    width?: number; 
    height?: number; 
};

let circle: Shape = {
    kind: "circle",
    radius: 7
};

let rectangle: Shape = {
    kind: "rectangle",
    width: 20,
    height: 30
};

console.log(circle); 
console.log(rectangle);