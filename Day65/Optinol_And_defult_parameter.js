console.log("**********************************\n* OPTIONAL AND DEFAULT PARAMETER *\n**********************************\n");
console.log("******* Defult Parameters ********");
function defult(name, course) {
    if (course === void 0) { course = "GIAIC"; }
    return "name : ".concat(name, " , course : ").concat(course);
}
console.log(defult("Ayesha", "PIAIC")); // output: "name : Ayesha , course : PIAIC"
console.log(defult("Tehreem")); // output: "name : Tehreem , course : GIAIC"
console.log("\n******* Optinol Parameter *******");
function Optinol(name, age) {
    if (age != undefined) {
        return "name : ".concat(name, " ,  Age : ").concat(age, " ");
    }
    else {
        return "name : ".concat(name);
    }
}
console.log(Optinol("Hania")); // output : "name : Hania"
console.log(Optinol("Arham", 19)); // output : "name : Arham , Age : 19"
