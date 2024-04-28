// Task 1: What's the result of OR?

alert(null || 2 || undefined); // ouput 2

//Task 2: What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // output 1 and 2

// Task 3: What is the result of AND?

alert(1 && null && 2); // ouput null

// Task 4: What is the result of AND'ed alerts?

alert(alert(1) && alert(2)); // output 1 and undefined

// Task 5 : The result of OR AND OR

alert(null || (2 && 3) || 4); // output 3
// The precedence of AND && is higher than ||, so it executes first. (null || 3 || 4)

// Task 6 : Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

let age = 90;
if (age >= 14 && age <= 90) {
  alert(" age is between 14 to 90");
}

// Task 7 : Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

age = 10; // Example age

// Using NOT:

if (!(age >= 14 && age <= 90)) {
  alert("Age is not between 14 and 90 inclusively.");
} else {
  alert("Age is between 14 and 90 inclusively.");
}
// Without using NOT:
if (age < 14 || age > 90) {
  alert("Age is not between 14 and 90 inclusively.");
} else {
  alert("Age is between 14 and 90 inclusively.");
}

// Task 8: Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert("first"); // output first
if (-1 && 0) alert("second"); // output wil not come beacuse if statment is not true
if (null || (-1 && 1)) alert("third"); // output third

// Task 9: Check the login
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt("write user name", "");

if (userName === "Admin") {
  let password = prompt("password?", "");
  if (password == "TheMaster") {
    alert("Welcome");
  } else if (password == "") {
    alert("Canceled");
  } else {
    alert("I Dont know");
  }
} else {
  alert("write right user name");
}
