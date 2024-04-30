// Task Function;

function checkMark(marks) {
  if (marks > 500) {
    return 'your marks is above 500';
  }
  // ...
  return console.log("your marks is less 500");
}

console.log(checkMark(600)); // output  your marks is above 500

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min("Tehreem", "Ayesha")); // output Ayesha

function Min(a, b) {
  return a < b ? a : b;
}
console.log(Min("Tehreem", "Ayesha"));// output Ayesha 

// glober Vs local veriable

// glober
let school = "G,G,S,S"; // it accessable on all page

function School() {
  let year = 2024; // local variable
  console.log(`my School Name is ${school}`);// glober variable
  console.log(
    `accessable only in block scop ${year} can not accessable all web pag`
  );
}

console.log(` accessable glober variable`,school);// glober variable
// console.log(year): error beacuse its not accessable outside of block Scop
console.log(School());

// defult parameters 

function person(Name, languag= 'urdu'){
  return ` Name : ${Name} , Languag : ${languag}.`
}

console.log(person('Ayesha'));// with defult parametar
console.log(person( "Tehreem" , 'English'))

