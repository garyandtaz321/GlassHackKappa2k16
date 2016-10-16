var Player = function (game, x, y) {
    this._game = game;
    this._player = Phaser.Sprite.call(this, game, x, y, 'car');

}

var ready = false;
var eurecaServer;
//this function will handle client communication with the server
var eurecaClientSetup = function() {
	//create an instance of eureca.io client
	var eurecaClient = new Eureca.Client();
	
	eurecaClient.ready(function (proxy) {		
		eurecaServer = proxy;
		
		
		//we temporary put create function here so we make sure to launch the game once the client is ready
		create();
		ready = true;
	});	
}


Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    if (this._cursors.left.isDown) {
        this._player.body.thrust = 400;
    }
};

module.exports = Player;
