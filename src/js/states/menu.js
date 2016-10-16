var Menu = function () {
};

module.exports = Menu;

Menu.prototype = {

  create: function () {
    this.go = this.game.add.button(575, 0, 'go', () => {
        this.game.state.start('Game');
    }, this, 1, 0, 2);

    this.options = this.game.add.button(575, 125, 'options', () => {
        this.game.state.start('Options');
    }, this, 2, 1, 0);

    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
    this.text = this.add.text(300, 200, "Welcome to the racing game!!!", style);


    this.credits = this.game.add.button(575, 250, 'credits', () => {
        this.game.state.start('Credits');
    }, this, 2, 1, 0); 
  },

  update: function () {
  },

};