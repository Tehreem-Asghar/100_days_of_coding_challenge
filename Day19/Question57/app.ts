// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.

let grades: number[] = [67, 90, 67, 90, 98, 45, 78];

let averageGrade =
  grades.reduce((number: number, total: number) => number + total, 0) /
  grades.length;

console.log(averageGrade);
