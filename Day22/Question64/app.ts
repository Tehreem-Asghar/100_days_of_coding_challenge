// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number
// For example, if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join
// strings. Mixing a string with a number changes the number into a string for the joining.

//1- Write a function that merges a piece of text with a number  -Done
//2- if provided with "Age: " and 30, it should give back "Age: 30" -Done

// this function take a two parametars string and  number
function combineStringAndNumber(text: string, number: number) {
  return text + number; // concatanating with paramaters it Join the text and number into a single text
}

console.log(combineStringAndNumber("age: ", 18)); // output age: 18
