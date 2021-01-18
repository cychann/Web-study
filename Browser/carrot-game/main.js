const play__btn = document.querySelector('#play__btn');
const carrots = document.querySelectorAll('.carrot');
const bugs = document.querySelectorAll('.bug');
const timer = document.querySelector('.timer');

let state = 0;


play__btn.addEventListener('click', () => {
    countTime();
    change__playBtn();
    carrots.forEach( (carrot) => {
        random__postion(carrot);
        state__item(carrot);
    });
    bugs.forEach( (bug) => {
        random__postion(bug);
        state__item(bug);
    })
})

function random__postion(item) {
    randomTop = Math.floor(Math.random()*123 + 277);
    randomLeft = Math.floor(Math.random()*650 + 100);
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
    if(state == 0) {
        time = setInterval(function() {
            count += 1;
            seconds = Math.floor((count)% 6000 / 100);
            display__seconds = 3-seconds;
            timer.innerHTML = `0 : ${display__seconds}`; 
            if(display__seconds <= 0 ) {
                clearInterval(time);
            }
        }, 10);
    }
    if(state == 1) {
        time__reset();
    }
}

function time__reset() {
    clearInterval(time);
    timer.innerHTML = '00:00';
}