// unshift() method adds one or more elements to the start of an array.

const arr = [1,23,4,4,5,"derf", "lol"];

const addEle = arr.unshift("Meow");
console.log(addEle);  // shows the total no.of elements after array.unshift // console.log(array to see the updated array)
console.log(arr); // shows the array after added element

console.log(arr.unshift("hi"));
console.log(arr); // shows the array after added element

console.log(arr.unshift("Hello", "Hola")); // increase the No.of elements to add by a comma (,)
console.log(arr); // shows the array after added element