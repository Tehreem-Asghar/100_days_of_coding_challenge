// Question 109: Write an if statement that logs "Good Morning" 
//if the current time is before 12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method.
// Remember, hours are in 24-hour format, so 12 PM is 12.
// Create a new Date object representing the current date and time
var time = new Date();
// Check if the current hour is less than 12
if (time.getHours() < 12) {
    // If the current hour is before 12, log "Good morning"
    console.log('good morning.');
}
else {
    console.log('current time is not before 12 pm');
}
