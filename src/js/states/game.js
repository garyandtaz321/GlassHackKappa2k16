var Player = require('../models/player');

var Game = function () {

};

module.exports = Game;

Game.prototype = {
  preload: function () {
  
  },

  create: function () {
    this.game.world.setBounds(0, 0, 1600, 1600);
    this.physics.startSystem(Phaser.Physics.P2JS);
    
    this.asset = this.add.sprite(this.world.centerX, this.world.centerY, 'car');
    this.physics.p2.enable(this.asset);

    this.game.camera.follow(this.asset);

    this.cursors = this.input.keyboard.createCursorKeys();
  },

  update: function () {
    if (this.cursors.left.isDown) {
        this.asset.body.rotateLeft(100);
    }
    else if (this.cursors.right.isDown) {
        this.asset.body.rotateRight(100);
    }
    else {
        this.asset.body.setZeroRotation();
    }
    if (this.cursors.up.isDown){
        this.asset.body.thrust(400);
    }
    else if (this.cursors.down.isDown){
        this.asset.body.reverse(400);
    }
  }
};
