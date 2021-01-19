const playBtn = document.querySelector('#play__btn');
const items = document.querySelector('.items');
const AllCarrots = document.querySelectorAll('.carrot');
const carrots = Array.from(AllCarrots);
const bugs = document.querySelectorAll('.bug');
const timer = document.querySelector('.timer');
const carrotLeft = document.querySelector('.carrot__left');
const back = document.querySelector('.background');
const result = document.querySelector('.result');
const ending = document.querySelector('.ending');
const replay = document.querySelector('.replay');
const bgm = document.querySelector('.bgm');
const bug__pull = document.querySelector('.bug__pull');
const carrot__pull = document.querySelector('.carrot__pull');
const game_win = document.querySelector('.game_win');

playBtn.addEventListener('click', () => {
    if(state == 1) {
        window.location.reload();
    }
    bgm.play();
    countTime();
    change__playBtn();
    carrot__left();
    carrots.forEach( (carrot) => {
        random__postion(carrot);
        state__item(carrot);
        carrot.addEventListener('click', () => {
            carrot__pull.play();
            carrot__pull.currentTime = 0;
            carrots.splice(carrots.indexOf(carrot),1);
            carrot.remove();
            carrot__left();
            if(carrots.length == 0) {
                game_win.play();
                ending.style.display = "block";
                result.innerHTML = "You Win!!";
                clearInterval(time);
            }

        })
    });
    bugs.forEach( (bug) => {
        random__postion(bug);
        state__item(bug);
        bug.addEventListener('click', () => {
            bug__pull.play();
            clearInterval(time);
            ending.style.display = "block";
            result.innerHTML = "You lost...";
        })
    })
})

replay.addEventListener('click', () => {
    window.location.reload();
})



function random__postion(item) {
    randomTop = Math.floor(Math.random()*123 + 277);
    randomLeft = Math.floor(Math.random()*630 + 100);
    item.style.position = 'absolute';
    item.style.top = `${randomTop}px`;
    item.style.left = `${randomLeft}px`;
}

function change__playBtn() {
    if(state == 0) {
        state = 1;
        document.querySelector('#play__btn').className = "fas fa-pause";
    }
    else {
        state = 0;
        document.querySelector('#play__btn').className = "fas fa-play";
    }
}

let state = 0;
function state__item(item) {
    if(state === 0) {
        item.style.display = 'none';
    }
    else {
        item.style.display = 'block';
    }
}

function countTime() {
    let seconds = 0;
    let count = 0;
    let display__seconds = 0;
    let timeSet = 10;
    if(state == 0) {
        time = setInterval(function() {
            count += 1;
            seconds = Math.floor((count)% 6000 / 100);
            display__seconds = timeSet - seconds;
            timer.innerHTML = `0 : ${display__seconds}`; 
            if(display__seconds <= 0 ) {
                clearInterval(time);
            }
        }, 10);
    }
    if(state == 1) {
        clearInterval(time);
        timer.innerHTML = '00:00';
    }
}

function carrot__left() {
    if(state == 1){
        carrotLeft.innerHTML = `${carrots.length}`
    }
    else {
        carrotLeft.innerHTML = '0';
    }
}

function removeCarrot() {
    for(const carrot of carrots) {
        carrot.addEventListener('click', () => {
            carrot.remove();
            console.log(carrot.length);
            
        })
    }
}

function init() {
    const item = document.createElement('div');
    item.setAttribute('class', 'items')
    item.innerHTML = `
        <img src="carrot/img/carrot.png" class="carrot">
        <img src="carrot/img/carrot.png" class="carrot">
        <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/carrot.png" class="carrot">
            <img src="carrot/img/bug.png" class="bug">
            <img src="carrot/img/bug.png" class="bug">
            <img src="carrot/img/bug.png" class="bug">
            <img src="carrot/img/bug.png" class="bug">
            <img src="carrot/img/bug.png" class="bug">
            <img src="carrot/img/bug.png" class="bug">
    `
    return item;
}