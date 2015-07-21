   window.onload = function(){
       
          var game = new Phaser.Game(500,400,Phaser.CANVAS,"GameContainer");
            
            var gameState = function(){ };
       
            gameState.prototype.preload = function(){
                this.load.image("player","assets/player.png");
                this.load.image("platform","assets/platform.png");
                
            };
            
            gameState.prototype.create = function(){
                this.player = this.add.sprite(200,100,"player"); // I have declared a local variable 
            // if u want use make it gloabal then declare it like - this.player
                this.player.anchor.setTo(0.5,0.5);
                
                this.platform = this.add.sprite(game.world.height-150,game.world.height-15,"platform");
                this.platform.anchor.setTo(0.5,0.5);
            
                // enable physics 
                this.physics.arcade.enable(this.platform);
                this.platform.body.immovable = true;
                
                this.physics.arcade.enable(this.player);
                this.player.body.collideWorldBounds = true;
                this.player.body.gravity.y = 250;
                
                this.input = this.input.keyboard.createCursorKeys(); // creating cursorKeys for input handling
                
            };
            
            gameState.prototype.update = function(){
                
                this.physics.arcade.collide(this.platform,this.player);
               
                // moving player
                    if(this.input.left.isDown){
                        this.player.body.velocity.x = -150;
                    }
                    else if(this.input.right.isDown){
                        this.player.body.velocity.x = 150;
                    }
                    else{
                        this.player.body.velocity.x = 0;
                    }
            };  
       
            game.state.add("GameState",gameState);
            game.state.start("GameState");
       
        };




