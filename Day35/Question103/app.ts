// Question 103: Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.

// this function return a random boolean value.
function randomBooleanValue() {
  return Math.random() > 0.5;
  //it will return true if random number will be greaterthan 0.5 if will not greater than so return false
}

console.log(randomBooleanValue());
