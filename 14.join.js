/*

The join() Method joins all the elements of an array into a string,
with an optional separator.

*/


const colors = ['red', 'green' , 1, true, [1, 3]];
const colorString = colors.join('*');
console.log(colorString);

const fruits = ["Apple", "orange", "Mango", "Banana"]
    const fruitList = fruits.join(", ");
    console.log(fruitList);

const emoji = ["🫡","🥲","🍧","😂","😊","🤣"];
    const emojiList = emoji.join(" 👻 ")
    console.log(emojiList);

    const numbers = [2,5,6,78,8,764,34,456];
    console.log(numbers.join(" 👀 "));