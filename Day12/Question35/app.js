//Question 35: Animals: Highlight animals with a common trait.
//Explain & TIP: Looping through an array of animals allows you to comment on each one individually. 
//This teaches you how to personalize messages within a loop based on array items.
var animals = ['dog', 'cat', 'rabbit'];
for (var animal = 0; animal < animals.length; animal++) {
    console.log("A ".concat(animals[animal], " would make a great pet"));
}
console.log('Any of these animals would make a great pet!');
