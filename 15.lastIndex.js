/*
The lastIndexOf() method in JS is used to find the last occurence of
a specified element in an array. It returns the index of that element's
last occurrence, or -1 if the element is not found.
*/

const num = [2, 4, 3, 56, 7, 3, 4, 2, 1, 3];

const check = num.lastIndexOf(3);
console.log(check);

console.log(num.lastIndexOf(2));


console.log(num.lastIndexOf(4));


console.log(num.lastIndexOf(20));