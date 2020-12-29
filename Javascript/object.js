// object = { key : value};

// 1. Literals and properties
const obj1 = {};    //'object literal' syntax
const obj2 = new Object();  //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const yoochan = {name: 'yoochan', age: 21};
print(yoochan);

//can add properties later
yoochan.hasJob = true;
console.log(yoochan.hasJob);

//can delete properties later
delete yoochan.hasJob;
console.log(yoochan.hasJob);

// 2. Computed properties
// key should be always string
console.log(yoochan.name);
console.log(yoochan['name']);
yoochan['hasJob'] = true;
console.log(yoochan.hasJob);

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('yoochan', 21);
console.log(person4);

// 4. Constructor Function
function Person(name,age){
    // this = {];
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in yoochan); //true
console.log('random' in yoochan);   //false
console.log(yoochan.random);    //undefined

// 6. for..in vs for..of
// for(key in obj)
for (key in yoochan){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for (value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3....])
const user = {name: 'yoochan', age: '21'};
const user2 =user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user); same
console.log(user4);

// another ex
const fruit1 = {color: 'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   //blue 덮어쓰기 때문이다
console.log(mixed.size);