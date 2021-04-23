// 함수 선언

function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a,b){
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);

// const result = add(1,2);    //호출만 하면 값 출력 안됨. 이와 같이 변수로 할당해줘야함
const addFun = add;
console.log(add);
addFun(1,2);