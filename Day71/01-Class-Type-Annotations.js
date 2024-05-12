/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
var ItStudent = /** @class */ (function () {
    function ItStudent(name, course, expertise) {
        // Constructor parameter type annotations
        this.name = name;
        this.course = course;
        this.expertise = expertise;
    }
    // Method type annotations
    ItStudent.prototype.student = function () {
        return "name : ".concat(this.name, ", course : ").concat(this.course, ", expertise : ").concat(this.expertise);
    };
    return ItStudent;
}());
// Create an instance of the Product class
var ITSTUDENT = new ItStudent("tehreem", "GIAIC", [
    "html",
    "css",
    "javascript",
]);
console.log(ITSTUDENT);
// Access class properties and call a method
console.log(ITSTUDENT.student()); // output : name : tehreem, course : GIAIC, expertise : html,css,javascript
