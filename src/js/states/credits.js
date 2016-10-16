var Credits = function () {

}

module.exports = Credits;

WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.

    active: function() { 
        this.time.events.add(Phaser.Timer.SECOND, createText, this); 
    },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Ubuntu']
    }

};

Credits.prototype = {
    create: function() {
        this.title = this.add.text(375, 10, "Credits");
        this.title.fill = "#ffffff";
        this.title.font = "Ubuntu";
    }
}