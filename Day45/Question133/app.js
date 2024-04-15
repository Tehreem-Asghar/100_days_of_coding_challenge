// Question 133: Write a JavaScript object and convert it into a JSON string.
// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight
//data-interchange format. It's easy for humans to read and write and for machines
// to parse and generate. Converting a JavaScript object into a JSON string can be
// done using JSON.stringify().
// defined Javascript Object.
var jsObject = {
    name: "Tehreem",
    age: 18,
    city: "New karachi",
};
// convert jsObject into JSON string
var json = JSON.stringify(jsObject);
console.log(json); //Output json Object {"name":"Tehreem","age":18,"city":"New karachi"}
