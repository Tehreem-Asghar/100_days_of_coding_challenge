// Question 29: Favorite Fruit: Create an array for your favorite fruits and
// check if certain fruits are included.
// Explain & TIP: Arrays can store multiple items like fruit names. 
//Use if statements to check for specific fruits

let fruit_names :string[]=['orang','mango','banana','apple'];

if( fruit_names.includes('orang')){
    console.log("you really like Orang");
}
if( fruit_names.includes('mango')){
    console.log("you really like Mango");
}
if( fruit_names.includes('banana')){
    console.log("you really like Banana");
}
if( fruit_names.includes('apple')){
    console.log("you really like Apple");
}
if( fruit_names.includes('strawberry')){
    console.log("you really like strawberry");//it will not run beacuse it is not in array
}