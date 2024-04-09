// Question 117: Implement a switch statement that evaluates an expression and
// uses the default case if none of the cases match.

// Explain & TIP: The default case in a switch statement provides a way to
//execute a block of code when none of the other case labels match the expression's value.

function expression(vowel: string): void {
  switch (vowel) {
    case "a":
      console.log(`${vowel} is a vowel.`);
      break;
    case "e":
      console.log(`${vowel} is a vowel.`);
      break;
    case "i":
      console.log(`${vowel} is a vowel.`);
      break;
    case "o":
      console.log(`${vowel} is a vowel.`);
      break;
    case "u":
      console.log(`${vowel}is a vowel.`);
      break;
    default:
      console.log(`${vowel} is not vowel`);
  }
}
expression("o");// Outputs: o is a vowel.
expression("a");// Outputs: a is a vowel.
expression("b");// Outputs: b is not a vowel.
