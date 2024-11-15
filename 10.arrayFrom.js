/*
The Array.from() method creates a new array instance from 
an array-like or iterable object.

works only with strings
*/

const str = "Abdullah";

const arr = Array.from(str);
console.log(arr);



const num = 234567;

const numArr = Array.from(num);
console.log(numArr); // output is an empty array



const num1 = "234567";

const num1Arr = Array.from(num1);
console.log(num1Arr); 

