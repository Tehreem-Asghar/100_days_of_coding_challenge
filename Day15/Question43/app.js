// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
// This exercise demonstrates array copying and manipulation.
var magicians = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("".concat(magicians[i], " the great"));
    }
    return greatMagicians;
}
var greatMagicians = make_great(magicians);
console.log('Orignal array');
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
// Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the
//   original names and one array with the Great added to each magician’s name.
