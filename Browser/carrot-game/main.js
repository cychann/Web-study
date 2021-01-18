const start__btn = document.querySelector('.game__btn');
const carrots = document.querySelectorAll('.carrot');
const bugs = document.querySelectorAll('.bug');

start__btn.addEventListener('click', () => {
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

let state = 0;
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