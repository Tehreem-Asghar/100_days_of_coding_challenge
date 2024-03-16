// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an
//indefinite number of arguments, useful for handling lists of data 
//like sandwich ingredients.


function sandwich(...items:string[]){
    for(let sandwich of items){
    console.log(` sandwich order: ${sandwich}`);
    }
    console.log("enjoy your order");
}

sandwich("sandwich", "tomato" , "mayo");
sandwich("ham", "cheese");
sandwich("mustard");
