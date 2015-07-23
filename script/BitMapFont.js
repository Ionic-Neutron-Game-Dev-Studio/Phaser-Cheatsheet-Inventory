var game = new Phaser.Game(480,350,Phaser.CANVAS,"GameContainer");

var GameState = function(){ 
//var font;
};

GameState.prototype.preload = function(){
    this.load.bitmapFont('pixelArt',"assets/fonts/pixel-Art.png","assets/fonts/pixel-Art.xml");
    // note : The xml file should be saved with UTF-8 encoding or some browsers won't load it.
};


GameState.prototype.create = function(){
   this.font = this.add.bitmapText(20,80,"pixelArt","This is a test line",15);
                // add.bitmapText(x,y,"fontKey",'Text',fontSize);
};


    game.state.add("gameState",GameState);
    game.state.start("gameState");

    // Here I am giving some tips about rendering font and tools that may help.

    //1. Bitmap font generator (Online) - http://kvazars.com/littera/
    //2. Bitmap font editor             - http://www.angelcode.com/products/bmfont/
    
    // Note : when you generate bitmap font using the first link, 
    // Make sure you select XML (.fnt) as the output under the format dropdown.
    // It should by enabled by default. After download the exported zipfile you found a .png file and
    // .fnt file simply change the extension of .fnt to .xml then your are done.


