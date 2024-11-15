/*
The Includes() method checks if an array contains a 
certain element, returning true or false.

it's case sensetive and dataType sensetive
*/


const fruits = ["Apple", 1, "banana", 34, true, "Abdullah"];

let check = fruits.includes(34);
console.log(check);


let check1 = fruits.includes("34");
console.log(check1);


let check2 = fruits.includes("banana");
console.log(check2);


let check3 = fruits.includes("apple");
console.log(check3);

//can also be directly written in console.log()

console.log(fruits.includes("Abdullah"));