//Find

/*
THe find method returns the value of the first element in the array
that satisfies the provided testing function. If no elements satisfy
the testing function, it returns undefined.

Definition: Finds the first element in an array that matches a
condition and returns that element.

syntax: array.find(callback(element, index, array), thisArg)


*/

//1
const num = [2,4,5,7,2,-1,5,-6,-9,1];

const check = num.find(num => num < -5);
console.log(check);


//2
const alph = ['a', 'b', 'f', 'd', 'g'];

const check1 = alph.find((alph) =>{
    return alph > "f"
})
console.log(check1);


//3
const mix = [ 's', 4 , 3, 'f', 6, 'H'];

const check2 = mix.find((mix) => mix < '6');
console.log(check2);