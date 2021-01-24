'use strict'
import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
.withgameDuration(5)
.withcarrotCount(3)
.withbugCount(3)
.build();
game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'cancel':
            message = 'Replay!'
            break;
        case 'win':
            message = 'You win!'
            break;
        case 'lose':
            message = 'You lost...'
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})

gameFinishBanner.setClickListener(() => {
    game.start();
})