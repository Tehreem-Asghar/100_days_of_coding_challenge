// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.

//This function takes an email and password as arguments and returns a promise.
const user_login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    //If the provided email and password match the expected values, it resolves with a success message.
    if (email === "Tehreem234@gmail.com" && password === "a1b2c3d4") {
      return resolve("successfully login");
    } else {
      //If the email or password does not match, it rejects with an error message.
      reject("Invalide password or email");
    }
  });
};
// Successful login example
// call function
user_login("Tehreem234@gmail.com", "a1b2c3d4")
  // This method is called when the promise is successfully resolved.
  .then((message) => {
    console.log(message);
  })
  //   This method is called when the promise is rejected.
  .catch((message) => {
    console.log(message);
  });
// Failed login example
// call function
user_login("Tehreem34@gmail.com", "a1b2d4")
  // This method is called when the promise is successfully resolved.
  .then((message) => {
    console.log(message);
  })
  // This method is called when the promise is rejected.
  .catch((message) => {
    console.log(message);
  });
