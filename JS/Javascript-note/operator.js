// 1.String concatetion
console.log('my' + 'cat');
console.log('1'+ 2);

// 2. Numeric operators
console.log(1+1); // add
console.log(1 -1); // sub
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preImcrement = ++counter; // 3
const postIncrement = counter++; // 2
// --도 마찬가지

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x += y;
x /= y;

// 5. Comparison opeartors
console.log(10 <6 );
console.log(10 <=6 );
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||(or), &&(and), !(not)

// ||(or), finds the first truthy value
// &&(and), finds the first falsy value

// 7. Equality
const sfive = '5';
const nfive = 5;

// == loose equality, with type conversion
console.log(sfive == nfive);    //true
console.log(sfive != nfive);    //false

// === strict equality, no type conversion -> 주로 이걸 사용
console.log(sfive === nfive);   //false
console.log(sfive !== nfive);   //true

//object equality ny reference
const y1 = {name: 'yoochan'};
const y2 = {name: 'yoochan'};
const y3 = y1;
console.log(y1 == y2);  //false
console.log(y1 === y2); //false
console.log(y1 === y3)  //true

// equality - puzller
console.log(0 == false);    //true
console.log(0 === false);   //false
console.log('' == false);   //true
console.log('' === false);  //false
console.log(null == undefined); //true
console.log(null === undefined);    //flase

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ?
// condition ? value1 : value2;
const name = 'yoochan';
console.log(name === 'yoochan' ? 'yes' : 'no');

// 10. Switch statement
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops

//while loop
let i = 3;
while (i>0){
    console.log(i);
    i--;
}

//for loop
for (i=3; i>0; i--){
    console.log(i);
}

//break, continue
// Q1. iterate from 0 to 10 and print numbers until (use continue)
for(i=0; i<11; i++){
    if (i%2 == 0) {
        console.log(i);
    }
    else{
        continue;
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(i=0; i<11; i++){
    if (i > 8) break;
    console.log(i);
}