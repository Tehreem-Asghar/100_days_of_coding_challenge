// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
// Calculates how many days are left until New Year's Day
function daysUntilNewyear() {
    // Get the current date
    var today = new Date();
    // Calculate the date for the next New Year (January 1st of the next year)
    var newyear = new Date(today.getFullYear() + 1, 0, 1);
    // Calculate the difference in milliseconds between the current date and the next New Year
    var diffTodayAndNewyear = newyear.getTime() - today.getTime();
    // Convert the time difference from milliseconds to days and round up to the nearest whole number
    var days = Math.ceil(diffTodayAndNewyear / (1000 * 60 * 60 * 24));
    // Return a string indicating the number of days until the next New Year
    return "".concat(days, " days Until new year.");
}
// Call the function and log the result to the console
console.log(daysUntilNewyear());
