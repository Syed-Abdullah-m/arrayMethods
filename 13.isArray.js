/*
The isArray() method checks if the input or given value
is an array or not and returns the output in boolean value.
if its an ARray returns True else False.

*/


let a = "Syed"; //string
let b = 87; // number
let c = false; // boolean
let d = {
    name: "Syed Abdullah",
    age: 22,
} // object
let e = ["A", 80, true, {name: "Syed", age: 22}, 'aloo']; // array

console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));
console.log(Array.isArray(d));
console.log(Array.isArray(e));