// Question 58: Average Score Calculator: Write a simple program that can take 
//lots of scores and find their average.
// Explain & TIP: This program can handle any number of scores you give it, 
//and it tells you the average score. Handy for seeing how well you did overall!
function averageScore() {
    var average = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        average[_i] = arguments[_i];
    }
    var total = average.reduce(function (sum, Average) { return sum + Average; }, 0) / average.length;
    return total;
}
console.log(averageScore(34, 68, 4, 7, 5));
