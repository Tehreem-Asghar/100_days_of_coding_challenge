// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how 
//functions can change data. This shows the impact of passing arrays by reference.
var magicians = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
//show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The graet " + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
