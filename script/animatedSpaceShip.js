var game = new Phaser.Game(700,408,Phaser.CANVAS,'GameContainer',{
    preload: preload , create: create
});


var sky;

        function preload(){
             game.load.atlasXML('animatedSky','assets/sprite-sheet/sprites.png','assets/sprite-sheet/sprites.xml');
        }

    
        function create(){
            sky = game.add.sprite(0,0,'animatedSky');
            //sky.anchor.setTo(0.5);
            sky.animations.add('moveCloud');
            sky.animations.play('moveCloud',15,true);
        }



