// Question 147: Explain how to handle errors in a callback pattern.

// Explain & TIP: Handling errors in a callback pattern often involves passing
//an error as the first argument to the callback. This convention allows the
//callback function to check for errors before proceeding with its execution.

// Define types for the callback function
type Callback = (error: Error | null, username: string, email: string) => void;

// Function definition and usage
function Data(callback: Callback): void {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    // Example data
    const username: string = "Tehreem";
    const email: string = "tehreem78@gmail.com";
    const error: Error | null = null; // Set this to an Error object if needed
    // If there is an error, pass it as the first argument
    // If there is no error, pass null and the data as the second and third arguments
    callback(error, username, email);
  }, 1000);
}
// Use the Data function with a callback that handles errors
Data((error: Error | null, username: string, email: string): void => {
  if (error) {
    console.error("An error occurred:", error);
  } else {
    console.log("User information:", {
      username,
      email,
    });
  }
});
