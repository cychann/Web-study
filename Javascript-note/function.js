// 1. Function declation
// function name(param1, param2) {body ... return;}
// one function === one thing
// naming: doSomething, command verb
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log("Hello");

// 2. Parameters
//premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const yoochan = {name: "yoochan"};
changeName(yoochan);
console.log(yoochan);

// 3. Default parameters 
function showMessage(message, from = 'unknown'){
    console.log(message + " " + from)
}
showMessage('Hi');

// 4. Rest parameters
function printAll(...args){
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'yoochan');

// 5. Local scope
let globalMessage = 'global';   //global variable
function printMessage(){
    let message = 'hello';  //local variable
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);

// 7. Early return, early exit
// bad
function upUser(user){
    if (user.point > 10){
        // logic
    }
}

// good 
function upUser(user){
    if (user.point <= 10) {
        return;
    }
    // logic
}

// function -> variable, assigned passed, returned 모두 가능하다.
// function declaration -> hoisted
// function expression -> no hoisted

// 1. Function expression
const print = function () {  // expression
    console.log('print');
}
print();
const printAgain = print; // declaration
printAgain();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }
    else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
}
const printNo = function () {
    console.log('no!')
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// practice
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remiander
function calculate(command, a, b){
    if (command === 'add')    return a+b;
    else if (command === 'substract') return a-b;
    else if (command === 'divide')    return a/b;
    else if (command === 'multiply')  return a*b;
    else if (command === 'remiander') return a%b;
}
console.log(calculate('substract', 3, 2));