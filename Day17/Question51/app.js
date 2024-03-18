// Question 51: Refactoring to Arrow Functions: Take a simple function 
// that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions 
//in  JavaScript and TypeScript, making your code cleaner and more readable.
//Original function for calculating the area of a rectangle
function areaOfRactangle(Height, Width) {
    return Height * Width;
}
// refactored  into an arrow function
var ractangle = function (width, height) { return width * height; };
console.log(ractangle(6, 7));
