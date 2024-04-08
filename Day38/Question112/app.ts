// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys.
//It can be more efficient for large sets of data and when the key is not a string.

// Declare a Map named 'countries' with keys of type string and values of type string
let countries: Map<string, string> = new Map([
  ["Italy", "Rome"], // Initialize the map with Italy and its capital Rome
]);
// Add more countries and their capitals to the map using the set method
countries.set("Germany", "Berlin");
countries.set("Uk", "London");
console.log(countries);
