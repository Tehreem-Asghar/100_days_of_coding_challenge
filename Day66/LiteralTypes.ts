console.log(`*******************
* LITERAL TYPE *
*******************`);

let literal_Types: "tehreem" | 1234 | true = 1234;
console.log(`literal type : ${literal_Types}`);

// literal Types with functions

function store(item: "pen" | "copy"): string {
  return ` item : ${item}`;
}

console.log(store("copy"));
// console.log(store('pencile'));Error :Argument of type '"pencile"' is not assignable to parameter of type '"stickers" | "copy"'.
