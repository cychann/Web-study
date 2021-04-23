const gameField = document.querySelector('.game__field')
const hero = document.querySelector('.hero')
const cssOfHero = window.getComputedStyle(hero); 
const score = document.querySelector('.hero__score')
const gameBtn = document.querySelector('.game__button')
const gameInit = document.querySelector('.game__init')
const gameStartScreen = document.querySelector('.start__game')
const refreshBtn = document.querySelector('.game__refresh')

const gameRuleBtn = document.querySelector('.game__rule')
const rule = document.querySelector('.rule')
const refreshBtn2 = document.querySelector('.game__refresh2')

const gameManualBtn = document.querySelector('.game__manual')
const manual = document.querySelector('.manual')
const refreshBtn3 = document.querySelector('.game__refresh3')

const popUp = document.querySelector('.pop-up')
const popUpRefresh = document.querySelector('.pop-up__refresh')
const popUpScore = document.querySelector('.pop-up__score')

let leftValue = cssOfHero.left; 
let topValue = cssOfHero.top;
let leftValueWithoutPx = parseInt(leftValue);
let topValueWithoutPx = parseInt(topValue);
let chkGhostCrash = false;
let chkItemCrash = false;
let game__score = 0;

gameBtn.addEventListener('click', () => {
    gameScreen();
    initGame()
    // const ghosts = document.querySelectorAll('.ghost')
    // hitGhost(ghosts)
})

gameRuleBtn.addEventListener('click', () => {
    rule.classList.remove('rule--hide')
    gameStartScreen.classList.add('game--hide')
    gameInit.classList.add('init--hide')
})

gameManualBtn.addEventListener('click', () => {
    manual.classList.remove('manual--hide')
    gameStartScreen.classList.add('game--hide')
    gameInit.classList.add('init--hide')
})

refreshBtn.addEventListener('click', () => {
    initScreen()
})

refreshBtn2.addEventListener('click', () => {
    initScreen()
})

refreshBtn3.addEventListener('click', () => {
    initScreen()
})

popUpRefresh.addEventListener('click', () =>{
    initScreen()
})

window.addEventListener('keydown', e => {
    moveHero(e.key)
    countScore()
    const ghosts = document.querySelectorAll('.ghost')
    const items = document.querySelectorAll('.item')
    ghosts.forEach(ghost => {
        check_ghost_crash(ghost)
        if(chkGhostCrash === true)  {
            stopGame()
        }
    })
    items.forEach(item => {
        check_item_crash(item)
    })

})


function check_ghost_crash(ghost) {
    if( (hero.offsetLeft >= ghost.offsetLeft - 10) && (hero.offsetLeft <= ghost.offsetLeft + 40) && (hero.offsetTop >= ghost.offsetTop - 30) && (hero.offsetTop<= ghost.offsetTop + 30 )) {
        chkGhostCrash = true;
    }
    else {
        chkGhostCrash = false;
    }
}

function check_item_crash(item) {
    if( (hero.offsetLeft >= item.offsetLeft - 10) && (hero.offsetLeft <= item.offsetLeft + 40) && (hero.offsetTop >= item.offsetTop - 30) && (hero.offsetTop<= item.offsetTop + 30 )) {
        removeItem(item)
    }
}

function initScreen() {
    gameInit.classList.remove('init--hide')
    gameStartScreen.classList.add('game--hide')
    popUp.classList.add('pop-up--hide')
    rule.classList.add('rule--hide')
    manual.classList.add('manual--hide')
}

function gameScreen() {
    gameInit.classList.add('init--hide')
    gameStartScreen.classList.remove('game--hide')
}

function initGame() {
    gameField.innerHTML = ``
    gameField.append(hero)
    // 초기화 시킨 후 히어로 생성
    makeGhost(5, 'img/ghost.png')
    makeItem(15, 'img/apple.png')
    ghostMove()
}

function stopGame() {
    popUp.classList.remove('pop-up--hide')
    gameStartScreen.classList.add('game--hide')
    totalScore()
}

function moveHero(eventKey) {
    if(eventKey === 'ArrowUp' && hero.offsetTop > 0){
        hero.style.backgroundPosition = '105px'
        let toUp = topValueWithoutPx -= 10;
        hero.style.top = toUp+'px'
    }
    else if(eventKey === 'ArrowDown' && hero.offsetTop < 700){
        hero.style.backgroundPosition = '0px'
        let toDown = topValueWithoutPx += 10;
        hero.style.top = toDown+'px'
    }
    else if(eventKey === 'ArrowLeft' && hero.offsetLeft > 10){
        hero.style.backgroundPosition = '70px'
        let toLeft = leftValueWithoutPx -= 10;
        hero.style.left = toLeft+'px';
    }
    else if(eventKey ==='ArrowRight' && hero.offsetLeft < 900){
        hero.style.backgroundPosition = '35px'
        let toRight = leftValueWithoutPx += 10;
        hero.style.left = toRight+'px';
    }
}

function makeItem(count, imgPath) {
    for(let i=0; i<count; i++) {
        const item = document.createElement('img')
        item.setAttribute('class', 'item')
        item.setAttribute('src', imgPath)
        item.setAttribute('id', i)
        item.style.position = 'absolute'
        const left = randomNumber(0, 900)
        const top = randomNumber(0, 700)
        item.style.left = `${left}px`
        item.style.top = `${top}px`
        gameField.appendChild(item)
    }
}

function countScore() {
    score.innerHTML = game__score
}

function totalScore() {
    popUpScore.innerHTML = `Your score : ${game__score}`
}

function removeItem(item) {
    item.remove()
    game__score++;
}

function makeGhost(count, imgPath) {
    for(let i=0; i<count; i++) {
        const ghost = document.createElement('img')
        ghost.setAttribute('class', 'ghost')
        ghost.setAttribute('src', imgPath)
        ghost.setAttribute('id', i)
        ghost.style.position = 'absolute'
        const left = randomNumber(0, 900)
        const top = randomNumber(0, 700)
        ghost.style.left = `${left}px`
        ghost.style.top = `${top}px`
        gameField.appendChild(ghost)
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function ghostMove() {
    const ghosts = document.querySelectorAll('.ghost')
    ghosts.forEach(ghost => {
        if(ghost.id >= 2){
            ghostMoveLeft(ghost, ghost.style.left)
        }
        else{
            ghostMoveTop(ghost, ghost.style.top)
        }
    })
}

function ghostMoveLeft(ghost, initialLeft) {
    let left = initialLeft
    ghost.style.left = `${left}px`
    left = setInterval(() => {
        if(left >=950){
            left = 0
        }
        left += 1
        ghost.style.left = `${left}px`
    }, 10)
}

function ghostMoveTop(ghost, initialTop) {
    let top = initialTop
    ghost.style.top = `${top}px`
    top = setInterval(() => {
        if(top >= 700){
            top = 0
        }
        top += 1
        ghost.style.top = `${top}px`
    }, 10)
    console.log()
}