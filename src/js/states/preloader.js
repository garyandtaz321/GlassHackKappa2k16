
var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('track1', 'assets/tilemap/track2.json');
    this.load.image('tileset1', 'assets/tilemap/tileset1.png');
    this.load.image('car', 'assets/img/car.png');
    this.load.spritesheet('go', 'assets/img/go.png', 190, 100);
    this.load.audio('racestart', 'assets/snd/racestart.wav');
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
