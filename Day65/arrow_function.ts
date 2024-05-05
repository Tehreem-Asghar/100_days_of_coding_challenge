console.log(`\n******** ARROW FUNCTION *********\n`);

let arrowFun = (age: number): string => `you are ${age} years old. `;
console.log(arrowFun(17));

// with another logic

let arrow = (name: string, course: string): string => {
  return `\nHello ${name}, do you like ${course}`;
};
console.log(arrow("Tehreem", "TypeScript"));
