// function that returns Even and Odd numbers
function evenOrOdd(numbers) {
    if(numbers % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//example(input => output)
//35231 => [1,3,2,5,3]
//0 => [0]

//


//convert number to a string so we can iterate over its characters
//function digitize(n) {
    //let nString = n.toString();
    //let digitizeArray = [];

    // iterate over characters in a string from right to left
    //for(let )

//Your task is to make two functions ( max and min, or maximum and minimum, etc., 
//depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list.

//var min = function(list);

let costOfMilk = 3;

if(costOfMilk < 2) {
    console.log('We will buy 2 gallons');
} else if(costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
}

var grade = 'C';

switch(grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

var a = 5;
var b = 6;

if(a == 5) {
    if(b == 6) {
        console.log('a is 5 and b is 6');
    } else {
        console.log
    }
}

//flatten upper code
if(a == 5 && b == 6) {
    console.log('a is 5 and b is 6');
}
