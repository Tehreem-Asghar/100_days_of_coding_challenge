// Question 54: Making Flexible Object Keys: Learn how to set up a list where 
//you can change the name of each section based on what you need at that moment,
//like adjusting labels based on user choices.

// Explain & TIP: This is like having labels you can rewrite anytime, 
//which is great for when you need to adjust your list based on new information.

// flexible Object keys through function
function dynamickey(key:string,value:string|number){
    let Object={}
    Object[key]=value;
    return Object;
}

console.log(dynamickey("name","Tehreem"));
console.log(dynamickey("number",18));