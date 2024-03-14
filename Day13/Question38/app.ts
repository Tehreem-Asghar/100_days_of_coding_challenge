// Question 38: Cities: Describing cities with a function.
// Explain & TIP: Use functions with default parameters to handle cases where 
//certain data might not change often. This helps in making your code more flexible.

function describing_cities(city :string, country:String ="unkown"){
    console.log(`${city} is in ${country}`);
}

describing_cities("panjab");
describing_cities("new Karachi", "Pakistan");
describing_cities("london", "united kingdom");
