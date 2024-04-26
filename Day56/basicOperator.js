//What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?

function post_pre_fix() {
  let a = 1;
  let b = 1;

  let c = ++a; // Here, 'a' is pre-incremented by 1 before assigning to 'c', so 'a' becomes 2, and 'c' becomes 2.
  let d = b++; // Here, the current value of 'b' (which is 1) is assigned to 'd', and then 'b' is incremented by 1. So, 'd' becomes 1, and 'b' becomes 2.

  alert(a); // output 2
  alert(b); // output 2
  alert(c); // output 2
  alert(d); // output 1
}

document.getElementById("post&pre").addEventListener("click", post_pre_fix);

/* Assignment result
What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);
*/
function Assignment() {
  let a = 2;
  let x = 1 + (a *= 2); // output 5
  alert(a);
  alert(x);
}

document.getElementById("Assignment").addEventListener("click", Assignment);

/*
Type conversions
What are results of these expressions?

1. "" + 1 + 0
2. "" - 1 + 0
3. true + false
4. 6 / "3"
5. "2" * "3"
6. 4 + 5 + "px"
7. "$" + 4 + 5
8. "4" - 2
9. "4px" - 2
10. "  -9  " + 5
11. "  -9  " - 5
12. null + 1
13. undefined + 1
14. " \t \n" - 2
*/

function Type_Conversions() {
  alert("" + 1 + 0); // output 10
  alert("" - 1 + 0); // output -1
  alert(true + false); // output 1
  alert(6 / "3"); // output 2
  alert("2" * "3"); // output 6
  alert(4 + 5 + "px"); // output 9px
  alert("$" + 4 + 5); // output $45
  alert("4" - 2); // output 2
  alert("4px" - 2); // output NaN
  alert("  -9  " + 5); // ouput -95
  alert("  -9  " - 5); // output -14
  alert(null + 1); // output 1
  alert(undefined + 1); // output NaN
  alert(" \t \n" - 2); // output  -2
}

document
  .getElementById("TypeConversion")
  .addEventListener("click", Type_Conversions);

/* 
Fix the addition
Here’s a code that asks the user for two numbers and shows their sum.
It works incorrectly. The output in the example below is 12 (for default prompt values).
Why? Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12
*/

function addition() {
  let a = +prompt("first number?", 1);
  let b = +prompt("Second number?", 2);
  let c = a + b;
  alert(a);
  alert(b);
  alert(c);
}

document.getElementById("addition").addEventListener("click", addition);
