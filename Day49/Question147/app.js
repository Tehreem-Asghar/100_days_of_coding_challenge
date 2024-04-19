// Question 147: Explain how to handle errors in a callback pattern.
// Function definition and usage
function Data(callback) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(function () {
        // Example data
        var username = 'Tehreem';
        var email = 'tehreem78@gmail.com';
        // Simulate an error condition
        var error = null; // Set this to an Error object if needed
        // If there is an error, pass it as the first argument
        // If there is no error, pass null and the data as the second and third arguments
        callback(error, username, email);
    }, 1000);
}
// Use the Data function with a callback that handles errors
Data(function (error, username, email) {
    if (error) {
        console.error('An error occurred:', error);
    }
    else {
        console.log('User information:', {
            username: username,
            email: email
        });
    }
});
