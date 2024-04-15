// Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript
// object. This is particularly useful when dealing with data received as JSON from a web server or API.


// Define a JSON string.
let data = `{
    "name" : "Tehreem",
    "age" : 18 ,
    "city" : "new karachi"
}`;

// convert into jsObject from  JSON String Object 
let json = JSON.parse(data);

console.log(json);//OutPut { name: 'Tehreem', age: 18, city: 'new karachi' }
