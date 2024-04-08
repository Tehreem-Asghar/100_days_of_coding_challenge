// Question 114: Iterate over a Map of student IDs and names,
// and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method
// or a for...of loop, providing access to each key-value pair.

// Declare a Map named 'student_IDs_name'
//with keys of type number and values of type string
const student_IDs_name: Map<number, string> = new Map([]);
// Add key-value pairs to the map using the set method
student_IDs_name.set(1, "tehreem");
student_IDs_name.set(2, "Ayesha");
student_IDs_name.set(3, "Arham");
// Iterate over each key-value pair in the map using the forEach method
student_IDs_name.forEach((name, id) => {
  // Log each key-value pair to the console
  console.log(`student ID: ${id} , Name : ${name}`);
});
