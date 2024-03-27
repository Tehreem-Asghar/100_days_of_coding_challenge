// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.

// this function take a name of user and say greet 'Hello' with user name if no give name so say greet of 'anonymous'
function greets(name: string = "anonymous") {
  // this log Says hello to the given name or to an anonymous user
  console.log(`Hello! ${name}.`);
}
// Trying the function with a name and without
greets("Tehreem"); //outPut  Hello! Tehreem.

greets(); // outPut  Hello! anonymous.
