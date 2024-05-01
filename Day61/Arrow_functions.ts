// function
function Name(name: string) {
  return `hello ${name}`;
}
console.log(Name("Tehreem"));

// function expression

let N_ame = function (name: string) {
  return `hello ${name}`;
};
console.log(N_ame("Ayesha"));

// Arrow function

let Nam_e = (name: string) => `hello ${name}`;
console.log(Nam_e("Arham"));

// multiple expression in arrow function

let multipleExpression = (name: string) => {
  let add = `${name} do you like programing `;
  console.log(add);
};
multipleExpression("Sarim");
