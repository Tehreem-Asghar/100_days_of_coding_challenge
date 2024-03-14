// Question37  Large Shirts: Default values in make_shirt().
//Explain & TIP: Modify functions to have default parameters, 
//simplifying calls for common use cases. This introduces default 
//function parameters.
function make_Shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love typeScript"; }
    console.log("The shirt size is ".concat(size, " and is says ").concat(message));
}
make_Shirt();
make_Shirt("medium");
make_Shirt("ts", "I love programing");
