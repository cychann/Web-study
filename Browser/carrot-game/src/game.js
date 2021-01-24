import Field from './field.js';
import * as sound from './sound.js';

// Builder Pattern
export default class GameBuilder {
    withgameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }

    withcarrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    withbugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        )
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn = document.querySelector('.game__button');
        this.gameBtn.addEventListener('click', () => {
            if(this.started) {
                this.stop();
            }
            else{
                this.start();
            }
        })

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    start() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScroe();
        this.startGameTimer();
        sound.playBackground();
    }
    
    stop() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancel');
    }


    finish(win) {
        this.started = false;
        this.hideGameButton();
        if(win) {
            sound.playWin();
        }
        else {
            sound.playBug();
        }
        this.stopGameTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    onItemClick = (item) => {
        if(!this.started) {
            return;
        }
        if(item === 'carrot') {
            this.score++;
            this.updataScoreBoard();
            if(this.score === this.carrotCount) {
                this.finish(true);
            }
        }
        else if(item === 'bug') {
            this.finish(false);
        }
    }

    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }
    
    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }
    
    showTimerAndScroe() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }
    
    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updataTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if(remainingTimeSec<=0) {
                clearInterval(this.timer);
                this.finish(this.carrotCount === this.score);
                return;
            }
            this.updataTimerText(--remainingTimeSec);
        }, 1000);
    }
    
    stopGameTimer() {
        clearInterval(this.timer);
    }
    
    updataTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }
    
    initGame() {
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }
    
    updataScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }
}