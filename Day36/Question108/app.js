// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
// This function compares two strings, ignoring case sensitivity
function ignoring_case_sensitivity(str1, str2) {
    console.log("lowercase", str1.toLowerCase() == str2.toLowerCase());
    console.log("uppercase", str1.toUpperCase() == str2.toUpperCase());
}
ignoring_case_sensitivity("tehreem", "TeHreem"); // Outputs: lowercase true, uppercase true
ignoring_case_sensitivity("Apple", "apple"); // Outputs: lowercase true, uppercase true
