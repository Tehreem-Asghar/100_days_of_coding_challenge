"use strict";
/*************
 * DEBUGGING *
 *************/
class Person {
    constructor(greet) {
        this.greet = greet;
    }
    Name(name) {
        console.log(`${this.greet}, ${name}`);
    }
}
let person = new Person('hello');
console.log(person);
person.Name('tehreem');
//# sourceMappingURL=01-debugging.js.map