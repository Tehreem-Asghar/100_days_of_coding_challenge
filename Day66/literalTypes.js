console.log("*******************\n* LITERAL TYPE *\n*******************");
var literal_Types = 1234;
console.log("literal type : ".concat(literal_Types));
// literal Types with functions
function store(item) {
    return " item : ".concat(item);
}
console.log(store("copy"));
// console.log(store('pencile'));Error :Argument of type '"pencile"' is not assignable to parameter of type '"stickers" | "copy"'.
