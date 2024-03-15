// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation 
// or display of their contents in a centralized manner. 
//This is useful for handling lists of data.
var Magicians = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(Magicians);
