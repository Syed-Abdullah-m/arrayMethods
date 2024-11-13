// Fill

/*
The fill method changes all the elements in an array to a static value,
from a start index (default 0) to an end index (default.array.length).
Definition: Fill all or part of an array with a specifiesd value.

syntax: array.fill(value, start, end)

*/

const arr = [1, 2, 3, 4, 5, 6];
//           0  1  2  3  4  5    //start
//           1  2  3  4  5  6    //end
arr.fill(125);
console.log(arr);




const arr1 = [1,2,3,4,5,6,7,8,9,0];

arr1.fill("Hii");
console.log(arr1);




const arr2 = [1,2,3,4,5,6,7,8,9,0];

arr2.fill("Hola", -3);
console.log(arr2);




const arr3 = [1,2,3,4,5,6,7,8,9,0];

arr3.fill("Hola", -7 ,-4);
console.log(arr3);