//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. 
//Assign 'green', 'yellow', or 'red' to a variable called alien_color.
//Explain & TIP: Use an if statement to check the alien's color. 
//This introduces you to simple conditionals.

 let alien_color :string="Green";

if(alien_color == "Green"){
    console.log("You just earned 5 points!");
}
if(alien_color=="red"){
    // no output beacuse condition is false
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// Explain & TIP: Expanding on the previous exercise, if-else chains allow
// you to handle multiple conditions.

if(alien_color == "green"){
    console.log("you just earn 5 points for shoting the aling!")
}else{
    console.log('you just earn 10 points.');
}

 let color :string = "yellow";

if(color == "green"){
    console.log("you just earn 5 points the aling!");
}else{
    console.log("you just earn 10 points. ");
}


// //Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
// // Explain & TIP: This exercise introduces you to handling multiple specific 
// //conditions in an if-else chain.


if(alien_color == "Green"){
    console.log("you just earn 5 points");
}else if(alien_color == "yellow"){
    console.log("you just earn 10 points");
}else if(alien_color == "red"){
    console.log("you just earn 15 points.");
}

if(color == "yellow"){
    console.log("you just earn 10 points");
}else if(color == "green"){
    console.log("you just earn 5 points");
}else if(color == "red"){
    console.log("you just earn 15 points");
}

let $color :string= "red";
if($color == "red"){
    console.log("you just earn 15 points");
}else if ($color == "green"){
    console.log(" you just earn 5 points");
}else if($color == "yellow"){
    console.log("you just earn 10 ponits");
}