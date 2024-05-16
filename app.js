// The initial numbers that must be verified.
//const n1 = 10;
//const n2 = 15;
//const n3 = 20;
//const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
//const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
//const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  //((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  //!(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  //(n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
// let is mutable and is the the most common variable used.
let name = "Elizabeth Bond "
let myColor ="pink"
let wallet = "20000"

// const is immuatable  once assigned can not be reassigned.

const myAge ="21"
const partner = "Liam"
const work = "lab1"
// the above work was review


// below is the four I chose to add to 50 . Included in these numbers are 15,8,7 and 20. 

const n1 = 5;
const n2 = 10;
const n3 = 15;
const n4 = 20;

// Now that I have my numbers . I will create a console log.
const price = n1 + n2 + n3 + n4;

//console.log(price);
 
// Just adding a function for practice
function addition (a,b,c,d){
    //console.log(a+b+c+d);
}
//addition(5,10,15,20);


//Part 2 of the lab 

//The distance of the trip, in total, is 1,500 miles.
//Your car’s fuel efficiency is as follows:
//At 55 miles per hour, you get 30 miles per gallon.
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.
//You have a fuel budget of $175.
//The average cost of fuel is $3 per gallon.


const m1 = 30 
const m2= 28
const m3 =23
const fuelBudget = 175
const fuelCost = 3 
const tripTotal= 1500


//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

 


function carMileage(m1,m2,operator){
 
    if(operator === "/"){
        console.log(m1 / m2);
    }
}

carMileage(1500,55, "/");
carMileage(1500,60,"/");
carMileage(1500,75,"/");

//Set up a program to answer the following questions:
//How many gallons of fuel will you need for the entire trip?
//Will your budget be enough to cover the fuel expense?
//How long will the trip take, in hours?