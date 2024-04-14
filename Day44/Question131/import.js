"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the StudentData class from the export.js file
const export_js_1 = require("./export.js");
const person1 = new export_js_1.StudentData("tehreem", 18, [
    "coding",
    "reading",
    "cooking",
]);
console.log(person1);
person1.greet();
