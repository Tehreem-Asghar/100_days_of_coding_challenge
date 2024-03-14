// Question 39: City Names: Formatting city-country pairs.
// Explain & TIP: Returning formatted strings from functions can simplify data
// presentation. This exercise practices string formatting and returning values 
//from functions.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Tokyo", "japan"));
console.log(city_country("bambai", "india"));
