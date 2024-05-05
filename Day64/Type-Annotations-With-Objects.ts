// TYPE ANNOTATIONS WITH OBJECT

// Declear variable object with type annotations
let person: {
  name: string;
  f_name: string;
  city: string;
  roll_number: number;
};

// initilaized a object

person = {
  name: "Tehreem",
  // f_name : 890, Error : Type 'number' is not assignable to type 'string'.
  f_name: "Asghar",
  city: "Karachi",
  roll_number: 1234,
};
console.log(person);

//we can also use another mthod

let course: {
  course: string;
  fee: number;
  confirm: boolean;
} = {
  course: "html",
  fee: 5000,
  confirm: true,
};

console.log(course);