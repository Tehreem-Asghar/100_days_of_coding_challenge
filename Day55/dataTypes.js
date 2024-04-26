// What is the output of the script?

let name = "Ilya";

  
    function types() {
      alert( `hello ${1}` ); // Output: "hello 1"
      alert( `hello ${"name"}` ); // Output: "hello name"
      alert( `hello ${name}` ); // Output: "hello Ilya"
    }
    
// Attach click event listener to the button
document.getElementById("DataTypes").addEventListener("click", types);



