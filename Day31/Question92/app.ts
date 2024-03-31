// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.

//This function removes the last element from an array and returns it
function removeLastElement(str: string[]) {
  // this method use for delet of array value from last.
  return str.pop(); // return remove element
}

console.log(removeLastElement(["ayesha", "tehreem", "arham"])); // output arham
console.log(removeLastElement(["mango", "orang", "banana"])); //output  banana
