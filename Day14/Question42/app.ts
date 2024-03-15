// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how 
//functions can change data. This shows the impact of passing arrays by reference.


let magicians: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];

function show_magicians(Magicians:string[]){
    for (let magician of Magicians){
        console.log(magician);
    }
}

//show_magicians(magicians);

function make_great(magicians:string[]){
    for( let i=0; i<magicians.length; i++){
        magicians[i]="The graet "+magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians)
