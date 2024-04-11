// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5
// using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in
// a loop. It's particularly handy when you want to ignore specific cases without
// stopping the entire loop.
// This for loop counts from 1 to 10 and skips number 5.
// The continue statement is used to skip the iteration where 'a' is equal to 5.
for (var a = 1; a <= 10; a++) {
    // If 'a' is equal to 5, skip this iteration and continue with the next one.
    if (a == 5) {
        continue;
    }
    // Print the current value of 'a' if it is not 5.
    console.log(a);
}
