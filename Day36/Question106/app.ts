// Question 106: Determine if a given year is a leap year using comparison operators.

// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.

// This function checks if a year is a leap year
function leap_year(year: number):any{
  // Check if the year is a leap year based on the conditions
  let leapYear: boolean =
    (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
  // Display whether the year is a leap year or not
  if (leapYear) {
    console.log(leapYear, "is leap year.");
  } else {
    console.log(leapYear, "is not leap year.");
  }
}
leap_year(2020); // output true
leap_year(1990); // output false
leap_year(2005); // output false
