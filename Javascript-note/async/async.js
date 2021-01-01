// async $ await
// clear style of using promise :)

// 1. async
async function fetchUser() {
        // do network reqeust in 10 secs.....
        return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}
// function getBanana() {
//     return delay(3000)
//     .then(() => 'banana');
// } 

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;   //아래 코드의 병렬처리 문제 해결
    const banana = await bananaPromise;
    // const apple = await getApple();
    // const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// 3. userful promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
