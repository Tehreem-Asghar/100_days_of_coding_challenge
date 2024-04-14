// Import the StudentData class from the export.js file
import { StudentData } from "./export.js";

const person1: StudentData = new StudentData("tehreem", 18, [
  "coding",
  "reading",
  "cooking",
]);

console.log(person1);
person1.greet();

