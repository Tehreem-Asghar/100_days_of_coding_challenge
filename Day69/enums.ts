enum Names {
  Ayesha,
  Tehreem,
  Arham,
  Sarim,
  Taha,
}

let Name = Names.Sarim; // it will return index
console.log(Name); // output 3

let returnValue = Names[Name]; // it will return value
console.log(returnValue); // output sarim

console.log(Names);
