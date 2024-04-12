// Question 125: Modify a method in an object to use the this keyword to access 
//another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple 
//properties within the same object, providing a cohesive way to manipulate
// internal data.
var rectangle = {
    length: 10,
    width: 5,
    // Method to calculate the area of the rectangle
    calculateArea: function () {
        // Using 'this' to access length and width properties
        return this.length * this.width;
    }
};
// Calculate the area of the rectangle
console.log(rectangle.calculateArea()); // Outputs: 50
