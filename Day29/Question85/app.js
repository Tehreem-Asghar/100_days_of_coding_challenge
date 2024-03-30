// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.
// this function find out position of world
function positionOfText(str) {
    // if we want to find word in our string text then we use indexOf method
    return str.indexOf("with"); // like this
}
console.log(positionOfText("Learn to Code with javaScript."));
// It tells us the position number where "with" starts.
