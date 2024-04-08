// Question 113: Write a function that checks if a Map contains a key for "Canada"
// and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has()
// method and retrieve its value with the .get() method.

let countries: Map<string, string> = new Map([["Italy", "Rome"]]);

countries.set("Germany", "Berlin");
countries.set("Uk", "London");
//console.log(countries);

// This function checks for "Canada" in the Map and logs its capital
function check_property(Countries: Map<string, string>) {
  if (Countries.has("canada")) {
    return ` ${Countries.get("canada")}`;
  } else {
    return "canada is not in the map.";
  }
}
console.log(check_property(countries));
