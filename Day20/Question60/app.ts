// Question 60: Self-Running User Profile: Create a quick, self-setup profile 
//for a user that can tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it,
// it builds a user profile by itself and can tell you about the user.

let userProfile = (function() {
    
    let name = "tehreem";
    let age = 18;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

userProfile.displayInfo();
