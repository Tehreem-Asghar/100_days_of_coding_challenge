"use strict";
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
// Explain & TIP: Loop through usernames to personalize greetings. 
//This introduces looping and conditional logic together.
let Hello_admin = ['Admin', 'Eric', 'Arham', 'Sarim'];
for (let admin of Hello_admin) {
    if (admin == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${admin}, thank you for logging in again.`);
    }
}
