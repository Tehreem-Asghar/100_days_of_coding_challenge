console.log(`*******************
* UNION TYPE *
*******************`);

//// Initialize a variable with a union type to demonstrate the concept of union types.
let value : string | number | boolean | null = null;
console.log('null type :',value);

value = "Tehreem"; // update with string type
console.log('string type : ',value);

value = 34678; // update with number type
console.log('number type : ',value);
