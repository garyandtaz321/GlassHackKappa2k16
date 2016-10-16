var Player = require('../models/player');

var Game = function () {

};

module.exports = Game;

Game.prototype = {
  preload: function () {
  
  },

  create: function () {
    this.game.world.setBounds(0, 0, 3200, 3200);
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.map = this.add.tilemap('track1');
    this.map.addTilesetImage('tileset', 'tileset');

    this.layer = this.map.createLayer('t1');

    this.asset = this.add.sprite(this.world.centerX, this.world.centerY, 'car');
    this.physics.p2.enable(this.asset);
    this.asset.body.debug = true;

    this.game.camera.follow(this.asset);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.racestart = false;

    this.time.events.add(Phaser.Timer.SECOND * 1, () => {
            this.racestart = this.add.audio('racestart');
            this.racestart.play();
            this.three = this.add.text(395, 250, "3");
            this.three.fill = "#ffffff";
            this.three.fixedToCamera = true;
    });

    this.time.events.add(Phaser.Timer.SECOND * 2, () => {
            this.three.alpha = 0;
            this.two = this.add.text(395, 250, "2");
            this.two.fill = "#ffffff";
            this.two.fixedToCamera = true;
    });

    this.time.events.add(Phaser.Timer.SECOND * 3, () => {
            this.two.alpha = 0;
            this.one = this.add.text(395, 250, "1");
            this.one.fill = "#ffffff";
            this.one.fixedToCamera = true;
    });

    this.time.events.add(Phaser.Timer.SECOND * 4, () => {
            this.one.alpha = 0;
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