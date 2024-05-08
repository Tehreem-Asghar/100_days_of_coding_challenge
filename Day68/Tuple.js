console.log("******************\nTuple Type\n*****************");
var Name = ["Tehreem", 18, true];
console.log(Name);
// Name[0] = 'Ayesha';
//Erorr: Cannot assign to '0' because it is a read-only property.
// use Tuple Type with function
function person(information) {
    return information;
}
console.log(person(["ayesha", 67, false]));
// we can also define Tuple Types this method
var student = ["Arham", 20, true];
console.log.apply(console, student);
// here i am doing Array Destructuring
var name1 = student[0], age = student[1], present = student[2];
console.log(name1);
console.log(age);
console.log(present);
