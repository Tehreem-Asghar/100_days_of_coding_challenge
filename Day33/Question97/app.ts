// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.

// this function formats the current date as DD-MM-YYYY
function currentDateObject() {
  const date = new Date(); // it will return current Date
  //console.log(date);
  const day = date.getDay(); // this method use for get date
  // this method use for get month and  Adds 1 because months are 0-indexed
  const month = date.getMonth() + 1;
  const year = date.getFullYear(); // this method use for get year
  return `${day}-${month}-${year}`; // return answer of three variables
}

console.log(currentDateObject()); // outPut 4-4-2024

// method two for get current date as DD-MM-YYYY
function currentDate() {
  let date = new Date();
  // this method return us date this formate DD-MM-YYYY
  return date.toLocaleDateString();
}
console.log(currentDate()); // outPut 4/4/2024
