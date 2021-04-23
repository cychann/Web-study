'use strict';

// Array

// 1. Declarction
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index poistion
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); //undefined

// 3. Looping over an array
//print all fruits
// a. for
for (let i =0; i< fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
});
fruits.forEach((fruit) => console.log(fruit)); //same

// 4. Addition, delection, copy
// push: add an item to the end
fruits.push('kiwi', 'orange');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('kiwi', 'orange');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by idex position
fruits.push('peach');
console.log(fruits);
fruits.splice(1)    //해당 index부터 뒤에 있는것을 다 지워버림
fruits.splice(1,1)  //index 1에 해당하는 것을 remove
fruits.splice(1,1, 'stw', 'pell')   //해당 값들을 지운 뒤, 그곳에 추가적인 값들을 추가 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['tomato', 'grape'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('orange'));
console.log(fruits.indexOf('kiwi'));    //없어서 -1을 출력

// includes
console.log(fruits.includes('orange')); //true

// lastIndexOf
fruits.push('orange');
console.log(fruits);
console.log(fruits.indexOf('orange'));  //가장 처음 있는 oragne
console.log(fruits.lastIndexOf('orange'));  //가장 마지막에 있는 orange
