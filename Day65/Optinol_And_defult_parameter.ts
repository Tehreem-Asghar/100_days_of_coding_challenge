console.log(`**********************************
* OPTIONAL AND DEFAULT PARAMETER *
**********************************\n`);

console.log(`******* Defult Parameters ********`);

function defult(name: string, course: String = "GIAIC") {
  return `name : ${name} , course : ${course}`;
}
console.log(defult("Ayesha", "PIAIC")); // output: "name : Ayesha , course : PIAIC"
console.log(defult("Tehreem")); // output: "name : Tehreem , course : GIAIC"

console.log(`\n******* Optinol Parameter *******`);

function Optinol(name: string, age?: number) {
  if (age != undefined) {
    return `name : ${name} ,  Age : ${age} `;
  } else {
    return `name : ${name}`;
  }
}

console.log(Optinol("Hania")); // output : "name : Hania"
console.log(Optinol("Arham", 19)); // output : "name : Arham , Age : 19"
