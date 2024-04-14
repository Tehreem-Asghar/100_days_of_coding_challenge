// Question 131: Create two modules; one that exports a class, and another that
//imports the class and creates an instance.

// Explain & TIP: Classes can be modularized in the same way as functions. This
// encapsulation and reusability is a cornerstone of modern JavaScript application structure.

export class StudentData {
  name: string;
  age: number;
  hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  greet() {
    console.log(`Hello,${this.name}`);
  }
}
