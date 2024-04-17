// Question 141: Discuss the significance of the await reserved word in
//asynchronous JavaScript.

// Explain & TIP: The await operator is used to wait for a Promise to settle.
//It can only be used inside an async function. Using await makes asynchronous
//code look and behave a little more like synchronous code,
//which can make it easier to understand and debug.

// The user_login function returns a promise that resolves if the email and password match
function user_login(email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "tehreem@gmail.com" && password === "12345") {
        resolve(email);
      } else {
        reject("Invalid email or password.");
      }
    }, 2000);
  });
}
// The user_details function uses await to wait for the user_login promise to settle
const user_details = async () => {
  try {
    // Use await to wait for user_login to resolve
    const login = await user_login("tehreem@gmail.com", "12345");
    console.log("Login successful:", login);
  } catch (error) {
    console.error("Login failed due to invalid credentials:", error);
  }
};
// Call the user_details function to perform the login
user_details();

// Output  Login successful: tehreem@gmail.com
