console.log("\n******** ARROW FUNCTION *********\n");
var arrowFun = function (age) { return "you are ".concat(age, " years old. "); };
console.log(arrowFun(17));
// with another logic
var arrow = function (name, course) {
    return "\nHello ".concat(name, ", do you like ").concat(course);
};
console.log(arrow("Tehreem", "TypeScript"));
