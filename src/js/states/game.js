var Player = require('../models/player');



var Game = function () {

};

module.exports = Game;

Game.prototype = {

  create: function () {

    this.game.world.setBounds(0, 0, 1600, 1600);
    this.physics.startSystem(Phaser.Physics.P2JS);
    
    this.asset = this.add.sprite(this.world.centerX, this.world.centerY, 'car');
    this.physics.p2.enable(this.asset); 

    this.cursors = this.input.keyboard.createCursorKeys();

    this.racestart = false;

    this.time.events.add(Phaser.Timer.SECOND * 1, () => {
    });

    this.time.events.add(Phaser.Timer.SECOND * 2, () => {
            
    });

    this.time.events.add(Phaser.Timer.SECOND * 3, () => {
            
    });

    this.time.events.add(Phaser.Timer.SECOND * 4, () => {
            this.go = this.add.text(395, 250, "Go!");
            this.go.fill = "#ffffff";
            this.go.fixedToCamera = true;
            this.racestart = true;
    });
    
    this.time.events.add(Phaser.Timer.SECOND * 5, () => {
            this.go.alpha = 0;
    });
  },

  update: function () {
    if(this.racestart == true) {
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
  }
};

