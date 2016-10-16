var Boot = function () {};

module.exports = Boot;

Boot.prototype = {

  preload: function () {
<<<<<<< HEAD
    this.load.image('preloader', 'assets/preloader.gif');

=======
    this.load.image('preloader', 'assets/img/preloader.gif');
>>>>>>> 74c3bd3f36e591ad4745784a110ddcd3a9b76002
  },

  create: function () {
    this.game.input.maxPointers = 1;

    if (this.game.device.desktop) {
      this.game.stage.scale.pageAlignHorizontally = true;
    } else {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.maxWidth = 640;
      this.game.scale.maxHeight = 480;
      this.game.scale.forceLandscape = true;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setScreenSize(true);
    }

    this.game.state.start('Preloader');
  }
};
