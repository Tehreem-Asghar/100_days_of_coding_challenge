/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
class ItStudent {
  // Property type annotations
  name: string;
  course: string;
  expertise: string[];

  constructor(name: string, course: string, expertise: string[]) {
    // Constructor parameter type annotations
    this.name = name;
    this.course = course;
    this.expertise = expertise;
  }
  // Method type annotations
  student(): string {
    return `name : ${this.name}, course : ${this.course}, expertise : ${this.expertise}`;
  }
}
// Create an instance of the Product class

let ITSTUDENT = new ItStudent("tehreem", "GIAIC", [
  "html",
  "css",
  "javascript",
]);
console.log(ITSTUDENT);

// Access class properties and call a method
console.log(ITSTUDENT.student()); // output : name : tehreem, course : GIAIC, expertise : html,css,javascript