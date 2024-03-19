// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
var grades = [67, 90, 67, 90, 98, 45, 78];
var averageGrade = grades.reduce(function (number, total) { return number + total; }, 0) /
    grades.length;
console.log(averageGrade);
