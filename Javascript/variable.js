// 1. Use strict
'use strict;'

// 2. Variable, rw(read/write)
// let
let name = 'yoochan';
console.log(name);
name = 'hello';
console.log(name);

// var (don't ever use this!)

// 3. Constant, r(read only)
// favor immutable data type always
const daysInWeek = 7;

// Note
// Immutable data types: premitive type, frozen obhjects
// mutable data types: all objects

// 4. Variable types

// number
// 어떤 실수값이든 할당하면 자동으로 적용시켜줌
const count = 17;   //integer
const size = 17.1;  //decimal number

// string 
// 모두 string 형태로 인식
const char = 'c';
const brendan  = 'brendan';

// boolean
// false: 0, null, undefined, NaN, ''
// true: any ohter value
const canRead = true;
const test = 3<1;   //false

// 5. Dynamic typing: dynamically typed lanuage
let text = 'hello'; //string
text = 1;   //number
text = '7' + 5;     //string
text = '8' / '2';   //number

//object
const yoochan = { name: 'yoochan', age: 21};
age = 22;