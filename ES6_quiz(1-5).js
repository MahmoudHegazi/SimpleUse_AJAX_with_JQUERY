/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...numbers) {
    if (numbers.length > 0) {
    var mySum = numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
    const myAverage = Number(mySum / numbers.length);
    return myAverage;
    } else {
    const myAverage = 0; 
    return myAverage;
    }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
