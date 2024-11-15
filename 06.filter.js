// Filter

/*
THe filter method creates a new array with all elements
that pass a test (provided as a function).

Definition: Filter elements from an array based on a 
condition, returning a new array with elements that
satisfy the condition.

syntax: array.filter(callback(element, index, array))

*/

const num = [1, 2, 3, 4, 5, 6, 7, 8];

// syntax 1
let check = num.filter((x) => x < 5);
console.log(check);

// syntax 2
let check1 = num.filter((x) => {
  return x < 7;
});
console.log(check1);


//2
const alph = ["a", "b", "e", "c", "d", "h", "l", "f"];

let check2 = alph.filter((y) => y > "f");
console.log(check2);


//3
const mix = [1, "a", 2, "b", 4, 'h', "f", "H", 3];

let check3 = mix.filter((z) => {
  return z < 3 || z < "f";
});
console.log(check3);


// .filter only filters according to the ascii values and same dataTypes