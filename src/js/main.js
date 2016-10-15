'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game-game');

window.Utils = require('./utils');

window.playerState = {
    currentLevel: 'Game'
};

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
<<<<<<< HEAD
game.state.add('web' , require('./states/game'));
=======
game.state.add('Options', require('./states/options'));
game.state.add('Credits', require('./states/credits'));
>>>>>>> b662e7760714389e263347bb75d0d4d3dc6fbc0a

game.state.start('Boot');
