'use strict'
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME__DURATION_SEC = 5;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    startGame();
})

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item) {
    if(!started) {
        return;
    }
    if(item === 'carrot') {
        score++;
        updataScoreBoard();
        if(score === CARROT_COUNT) {
            finishGame(true);
        }
    }
    else if(item === 'bug') {
        finishGame(false);
    }
}

gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    }
    else{
        startGame();
    }
})



function startGame() {
    started = true;
    initGame();
    showStopButton();
    showTimerAndScroe();
    startGameTimer();
    sound.playBackground();
}

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY?');
    sound.playAlert();
    sound.stopBackground();
}

function finishGame(win) {
    started = false;
    hideGameButton();
    if(win) {
        sound.playWin();
    }
    else {
        sound.playBug();
    }
    stopGameTimer();
    sound.stopBackground();
    gameFinishBanner.showWithText(win? 'YOU WON' : 'YOU LOST');
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function showTimerAndScroe() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME__DURATION_SEC;
    updataTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec<=0) {
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updataTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updataTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame() {
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
}

function updataScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;
}