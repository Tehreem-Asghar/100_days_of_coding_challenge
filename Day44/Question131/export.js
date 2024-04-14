"use strict";
// Question 131: Create two modules; one that exports a class, and another that
//imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentData = void 0;
// Explain & TIP: Classes can be modularized in the same way as functions. This
// encapsulation and reusability is a cornerstone of modern JavaScript application structure.
class StudentData {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    greet() {
        console.log(`Hello,${this.name}`);
    }
}
exports.StudentData = StudentData;
