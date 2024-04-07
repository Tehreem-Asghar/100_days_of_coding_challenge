// Question 110: Create a function that assigns a grade (A, B, C, D, F)
//based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score
//ranges. You can use an if-else-if chain to determine the grade.

function score(marks) {
  if (marks >= 90) {
    console.log("Grad: A");
    if (marks >= 95) {
      console.log("congratulation you won $100");
    }
  } else if (marks >= 80) {
    console.log("Grad: B");
  } else if (marks >= 70) {
    console.log("Grad: C");
  } else if (marks >= 60) {
    console.log("Grad: D");
  } else if (marks >= 50) {
    console.log("Grad F");
  }
}
score(95);
score(60);
score(90);
score(80);
