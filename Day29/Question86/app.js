// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
// this function will check "grab" word is available in string text
function presentChecking(str) {
    // this "includes" method check "grab" word is in our string if is available
    // so it return true if not available so it return false
    return str.includes("grab");
}
console.log(presentChecking("when you have a dream you have got to grab it and never let go"));
//It tells us the word is available Or not available  and it return answer in boolean
