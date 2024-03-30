// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
// This function takes out the first 10 characters from any text
function extractStartThenCharacters(str) {
    // this "substring" method use for extract words of any text
    return str.substring(0, 10);
}
console.log(extractStartThenCharacters("when you have a dream you have got to grab it and never let go"));
