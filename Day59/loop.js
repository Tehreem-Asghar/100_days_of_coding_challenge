// Task loops
//The while loop

let number = 0;
// This loop will run as long as number is less than or equal to 5
while (number <= 5) {
  console.log(number); // Outputs: 0, 1, 2, 3, 4, 5
  number++;
}
console.log('end');

let num = 0
//This loop will not execute because the condition is false (0 is falsy)
while (num) {// output : nothing
  console.log(num);
  --num;
}
console.log('End');

  //The “do…while” loop
  let i = 0;
  do { // output 0,1,2
    console.log( i );
    i++;
  } while (i < 3);

  // the for loop
  for ( let i = 0 ; i <= 4 ; i++){
    console.log(i);// Output: 0, 1, 2, 3, 4
  }

