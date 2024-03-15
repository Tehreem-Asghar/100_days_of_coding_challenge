// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation 
// or display of their contents in a centralized manner. 
//This is useful for handling lists of data.


let Magicians :string[]=['Harry Houdini','David Blaine','David Copperfield','Ricky Jay'];

function show_magicians(Magicians:string[]){
    for (let magician of Magicians){
        console.log(magician);
    }
}

show_magicians(Magicians);