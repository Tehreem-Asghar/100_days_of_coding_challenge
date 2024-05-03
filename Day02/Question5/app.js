"use strict";
// Question 6: Stripping Names: Store a person’s name and include some whitespace characters at the beginning and end of the name.
// Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after stripping the white spaces.
const person_Name = '   \n\tShahid Afridi\t\n   ';
console.log(person_Name);
const without_spaces = person_Name.trim();
console.log(without_spaces);
