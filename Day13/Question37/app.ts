// Question37  Large Shirts: Default values in make_shirt().
//Explain & TIP: Modify functions to have default parameters, 
//simplifying calls for common use cases. This introduces default 
//function parameters.

function make_Shirt(size :string ="large", message:string="I Love typeScript"){
        console.log(`The shirt size is ${size} and is says ${message}`);
}

make_Shirt();
make_Shirt("medium");
make_Shirt("ts","I love programing");