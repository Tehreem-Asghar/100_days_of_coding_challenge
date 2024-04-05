// Question 104: Create a function that generates a random hexadecimal color code.

// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.

// This function generates a random hexcolor code
function genratHexaColor(){
    let hexColor= `# ${Math.random().toString(16).slice(2,8).padEnd(6,'0')}`;
    return hexColor;// Returns the random color code
}
// Outputs a random hex color code like #ff3e12
console.log(genratHexaColor());