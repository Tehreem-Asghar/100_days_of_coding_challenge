// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

// Explain & TIP: A switch statement is a great way to select one of many code blocks to be
//executed. It's particularly useful for scenarios like mapping numbers to days of the week.

// This function logs the day of the week based on a number (1-7)
function day_Of_week(number: number) {
  // Switch statement to determine the day of the week based on the number provided
  switch (number) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("saturday");
      break;
    // If the number is not between 1 and 7, no day is printed
    default:
      console.log("Invalid day number");
  }
}
day_Of_week(3); // Outputs: Tuesday
day_Of_week(6); // Outputs: Friday
