// Question 61: Making Enums for Vehicles: Let's create categories for vehicles 
//like cars, trucks, and motorcycles using enums, and show one example.

// Explain & TIP: Enums are like special lists in your code that help you 
//categorize things. They make your code cleaner and easier to understand.


enum vehicles{
  car,
  trucks,
  motorcycles,
}

// Showing one type of vehicle from the list
console.log(vehicles.car); // It shows 0 because enums start counting from 0

console.log(vehicles[0]);//it show car beacuse enums retun value if we will give index number.
