/* Task Start: 
Question 1: if (a string with zero )
    Will alert be shown?
*/

if ("0") {
  alert("Hello"); // run if statement beacuse string have a character it means is true
}
// Question 2 : The name of JavaScript
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let Message = prompt("What is the “official” name of JavaScript?", "");
if (Message == "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don’t know? ECMAScript!");
}

// Question 3 :Show the sign
// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let val = prompt("Type a Number", 0);
if (val > 0) {
  alert(1);
} else if (val < 0) {
  alert(-1);
} else if (val == 0) {
  alert(0);
}

// Question 4 : Rewrite 'if' into '?'
// Rewrite this if using the conditional operator '?':
// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
//}

a=b =4
let result = (a+b <4) ? 'Below' : 'Over' ;

alert(result)

// Question 5: Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt('write your login name')
let message = (login == 'Employee') ? 'Hello' :
 (login == 'Director') ? 'Greetings' :
 (login == '') ? 'No Login':
 '';
 alert(message);