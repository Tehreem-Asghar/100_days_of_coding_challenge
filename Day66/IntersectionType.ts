console.log(`*******************
* Intersection Type *
*******************`);

// defined custom type
type Person = {
  name: string;
  course: string;
};

// another custom type
type Person2 = {
  rollnumber: number;
  email?: string;
};

// combine both custom types
type combine = Person & Person2;

// add custom type
let student: combine = {
  name: "Ayesha",
  course: "PIAICA",
  rollnumber: 1,
};

console.log(student);
