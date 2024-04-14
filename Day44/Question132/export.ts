// Question 132: Discuss the difference between default and named exports in
//JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and
//named. A module can have only one default export, but multiple named exports.
//This flexibility supports various use cases in module design.

export default class Name {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export function numbers(num1:number, num2:number) {
  return num1 + num2;
}

export const wheather: string = "rainy";

export let age: number = 18;
