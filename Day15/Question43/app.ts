// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
// This exercise demonstrates array copying and manipulation.

let magicians: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];

function show_magicians(Magicians:string[]){
    for (let magician of Magicians){
        console.log(magician);
    }
}


function make_great(magicians:string[]){
    let greatMagicians :string[]=[]
    for( let i=0; i<magicians.length; i++){
       greatMagicians.push(`${magicians[i]} the great`);
    }
    return greatMagicians;
}

let greatMagicians = make_great(magicians);
console.log('Orignal array');
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names