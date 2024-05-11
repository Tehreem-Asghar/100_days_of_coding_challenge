console.log(`******** INTERFACE **********`);

//interface in TypeScript is a way to define a contract or blueprint for the
//shape and structure of an object

interface person {
  // this blueprint we can use with multipule objects
  name: string;
  age: number;
}

let obj: person = {
  name: "Tehreem",
  age: 19,
};

console.log(obj);

// use with another obj

let Ayesha: person = {
  name: "Ayesha",
  age: 18,
  //course : 'giaic', Error : Object literal may only specify known properties,
  // and 'course' does not exist in type 'person'
};

console.log(Ayesha);