/*
The flat() method creates a new array with all sub-array elements
concatenated into it recursively upto the specified depth.


*/

const nestedarr = [1, "s", "g", 32, [8, [4,["a", "b", "d", ["u",[1,2,3], "l"]], 2] ,4], 9];


// flatten the array by one level
const arr = nestedarr.flat(1);
console.log(arr);


// flatten the whole array
const arr1 = nestedarr.flat(Infinity);
console.log(arr1);


// flaatten the array by 2 levels
const arr2 = nestedarr.flat(2);
console.log(arr2);


// any bigger number than the available nested arrays will act as infinity

// flatten the whole array without infinity
const arr3 = nestedarr.flat(45);
console.log(arr3);