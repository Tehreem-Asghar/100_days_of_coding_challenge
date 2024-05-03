//Question 3: Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.

let personName :string="tehreem";
// lowerCase
console.log(`LowerCase`,personName.toLowerCase());
// UpperCase
console.log(`UpperCase`,personName.toUpperCase());
// TitleCase
console.log(`TitleCase`,personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "));