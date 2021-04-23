// JSON
// JavaScript Object Notation

// 1, Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('can jump!');
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json =JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { //call back function
    return value;
})
console.log(json);

// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); -> error 함수는 포함안됨

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);   