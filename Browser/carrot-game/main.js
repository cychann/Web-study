var carrot = document.querySelector('.carrot');
var start__btn = document.querySelector('.game__btn');

start__btn.addEventListener('click', () => {
    random__postion(carrot);
})

function random__postion(item) {
    randomTop = Math.floor(Math.random()*123 + 277);
    randomLeft = Math.floor(Math.random()*650 + 100);
    item.style.position = 'absolute';
    item.style.top = `${randomTop}px`;
    item.style.left = `${randomLeft}px`;
}