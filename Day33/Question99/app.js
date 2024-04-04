// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, date) {
    // this will give the current date
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    // Get the birthdate of the current year
    var nextBirthday = new Date(year, month - 1, date);
    // Check if the next birthday has already passed this year
    if (nextBirthday < currentDate) {
        // If it has passed, calculate the next birthday for the next year
        nextBirthday.setFullYear(year + 1);
    }
    // Return the next birthday date
    return nextBirthday;
}
var nextBirthday = getNextBirthday(1, 30);
console.log("Next birthday on ", nextBirthday.toLocaleDateString());
