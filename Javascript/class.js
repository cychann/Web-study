'use strict';
// class: template
// object: instance of a class

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log('hello');
    }
}

const yoochan = new Person('yoochan', 21);
console.log(yoochan.name);
console.log(yoochan.age);
yoochan.speak();

// 2. Getter and setters
class User {
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value;
    }
}
const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// class Experiment {
//     publicField = 2;
//     #privateField = 0;
// }
// const experimet = new Experiment();
// console.log(experimet.publicField);
// console.log(experimet.privateField);

// // 4. Static properties and methods
// class Article {
//     static publisher = 'yoochan';
//     constructor(articleNumber){
//         this.articleNumber = articleNumber;
//     }
//     static printPublisher(){
//         console.log(Article.publisher);
//     }
// }
// const article1 = new Article(1);
// const article2 = new Article(2);
// console.log(Article.publisher);
// Article.printPublisher();

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(this.color);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());
triangle.draw();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //True
console.log(triangle instanceof Rectangle);     //false
console.log(triangle instanceof Triangle);      //True
console.log(triangle instanceof Shape);         //True
console.log(triangle instanceof Object);        //True