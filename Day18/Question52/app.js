// Question 52: Make a Smartphone Object: Create a simple way to keep track of a 
//smartphone's details. Include its brand, model, and other key features 
//like how much storage it has, the size of its screen, and how long its battery lasts.
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
// store information about smart phone in Object.
var smartphone = {
    make: "realme",
    model: "c25s",
    space: {
        Storage: "64GB 4GB RAM, 128GB 4GB RAM",
        batteryLife: "18 hours",
        screenSize: "6.2 inches",
    },
    waterproof: true,
};
// print object 
console.log(smartphone);
// print object property throught .nation.
console.log(smartphone.model);
//print nested object throught  Array[]nation.
console.log(smartphone['space']);
