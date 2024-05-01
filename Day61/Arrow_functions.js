// function
function Name(name) {
  return "hello ".concat(name);
}
console.log(Name("Tehreem"));
// function expression
var N_ame = function (name) {
  return "hello ".concat(name);
};
console.log(N_ame("Ayesha"));
// Arrow function
var Nam_e = function (name) {
  return "hello ".concat(name);
};
console.log(Nam_e("Arham"));
// multiple expression in arrow function
var multipleExpression = function (name) {
  var add = "".concat(name, " do you like programing ");
  console.log(add);
};
multipleExpression("Sarim");
