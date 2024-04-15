// Question 135: Explain how you can format a JSON string with proper indentation
// for readability.
// Explain & TIP: JSON.stringify() can take additional parameters to format the
//resulting JSON string. Adding an indent level as the third argument beautifies
//the output, making it more readable.
// defined a jsObject
var personObj = {
    name: "Arham",
    age: 20,
    city: "karachi",
};
// convert JsObject into JSON object and used Optinol pramaters
//The third parameter specifies the indentation level (4 spaces in this case)
//for the formatted JSON string, making the output more readable.
var convert_JSON_Object = JSON.stringify(personObj, null, 4);
console.log(convert_JSON_Object);
/*OutPut
{
    "name": "Arham",
    "age": 20,
    "city": "karachi"
}
*/
