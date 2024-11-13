// The every array method checks all the 
// elements in the arrays and passes the 
// test defined by the function 

let arr = [1,2,3,4,5];

let check = arr.every((x)=> {
    return x > 1
})
console.log(check);




const arr1 = [12,34,66,32,1,2,3];

let check1 = arr1.every((y) => {
   return y <80
})

console.log(check1);






let arr2 = ["hi", "hello", "Hola", 12, 64, 34];
let check2 = arr2.every((z) =>{
    return z >= 99999
}
)
console.log(check2);