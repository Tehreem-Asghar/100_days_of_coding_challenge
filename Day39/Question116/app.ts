// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of
// code, which is handy for categorizing items into broader groups.

function season(month: number) {
  switch (month) {
     // Winter months: December, January, February
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
      // Spring months: March, April, May
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
// Summer months: June, July, August
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
      // Autumn/Fall months: September, October, November
    case 9:
    case 10:
    case 11:
      console.log("Autumn/Fall");
      break;

    // If the month doesn't match any of the cases above
    default:
      console.log("invalid month");
  }
}

season(12);// Outputs: Winter
season(7);// Outputs: Summer

