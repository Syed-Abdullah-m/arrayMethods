// Push() method adds one or more elements to the end of an array.


const arr = [1,23,4,4,5,"derf", "lol"];

const addEle = arr.push("Meow");
console.log(addEle);  // shows the total no.of elements after array.push // console.log(array to see the updated array)
console.log(arr); // shows the array after added element

console.log(arr.push("hi"));
console.log(arr); // shows the array after added element

console.log(arr.push("Hello", "Hola")); // increase the No.of elements to add by a comma (,)
console.log(arr); // shows the array after added element