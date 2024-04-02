// Question 94: Use the .map() method to create a new array that contains the
//length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to
// a specific function and returns a new array with the transformed items.

// Defined an array with some names
let names: string[] = ["Tehreem", "Ayesha", "Muskan", "shaheen", "Mehak"];
console.log(names); // log array output all above names of array
// use ".map()" method for a new array with the length of each word
let namesArrayLenght: number[] = names.map((items) => items.length);
console.log(namesArrayLenght); // output [7,6,6,7,5]

