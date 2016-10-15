var Player = function (game, x, y) {
    this._game = game;
    this._player = Phaser.Sprite.call(this, game, x, y, 'car');

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    if (this._cursors.left.isDown) {
        this._player.body.thrust = 400;
    }
};

module.exports = Player;
