/*************
 * DEBUGGING *
 *************/

class Person {
  greet: string;
  constructor(greet: string) {
    this.greet = greet;
  }
  Name(name: string) {
    console.log(`${this.greet}, ${name}`);
}
}

let person = new Person('hello')
console.log(person);
person.Name('tehreem');