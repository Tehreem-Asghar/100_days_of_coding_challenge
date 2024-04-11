// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop
// when it reaches 5.
// Explain & TIP: The break statement terminates the loop immediately.This is
//useful for stopping a loop when a certain condition is met, even if the loop's
//original termination condition hasn't been reached yet.
//  initilaiz 'a' variable that's value define is 10;
var a = 10;
// use while loop that count down  from 10 - 1 and stop at 5;
while (a > 0) {
    if (a === 5) {
        break; // Exits the loop when 'a' reaches 5
    }
    console.log(a);
    a--; // Decrements the counter
}
