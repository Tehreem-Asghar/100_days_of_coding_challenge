"use strict";
// Question 132: Discuss the difference between default and named exports in
//JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = exports.wheather = exports.numbers = void 0;
// Explain & TIP: JavaScript provides two main types of exports: default and
//named. A module can have only one default export, but multiple named exports.
//This flexibility supports various use cases in module design.
class Name {
    constructor(name) {
        this.name = name;
    }
}
exports.default = Name;
function numbers(num1, num2) {
    return num1 + num2;
}
exports.numbers = numbers;
exports.wheather = "rainy";
exports.age = 18;
