let sceneState =function() {
	this.gameTimer = 3;
	this.mode = 0;
};
sceneState.prototype.create = function(){
	this.menu = game.add.sprite(0,0,"scene");
	this.sign = game.add.sprite(0,-1000, "sign");
	game.physics.enable(this.sign, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor");
};

sceneState.prototype.update = function(){
	if(game.input.mousePointer.isDown &&this.mode === 0){
		if (game.input.x >379 && game.input.x < 779 && game.input.y >1012 && game.input.y< 1173 ){
			this.mode = 1;
		}
		else if((game.input.x >379 && game.input.x < 779 && game.input.y > 1239 && game.input.y < 1400)){
			this.mode = 2;
		}
		else if(game.input.x >379 && game.input.x < 779 && game.input.y > 1464 && game.input.y < 1625){
			this.mode = 3;
		}
		else if(game.input.x <200 && game.input.y> 1600){
			game.state.start("MainMenu");
		}
	}
	if(this.mode === 1){
		this.gameTimer -= game.time.physicsElapsed;
		this.sign.body.velocity.y = -300;
		if(this.gameTimer <0){
			game.state.start("Telescope");
		}
	}
	if(this.mode === 2){
		this.gameTimer -= game.time.physicsElapsed;
		this.sign.body.velocity.y = -300;
		if(this.gameTimer <0){
			game.state.start("Gunplay");
		}
	}
	if(this.mode === 3){
		this.gameTimer -= game.time.physicsElapsed;
		this.sign.body.velocity.y = -300;
		if(this.gameTimer <0){
			game.state.start("Radio");
		}
	}
}