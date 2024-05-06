console.log(`*******************
* Type Alias *
*******************`);
// defined custom types
type Person = {
  name: string;
  course: string;
  rollnumber: number;
  email?: string;
};

// add custom types
let Tehreem: Person = {
  name: "Tehreem",
  course: "GIAIC",
  rollnumber: 12345,
  email: "Tehreem@gmail.com",
};

console.log(Tehreem);
console.log("course : ", Tehreem.course); 
