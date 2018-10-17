let mainMenuState =function() {
	
};
mainMenuState.prototype.create = function(){
	this.menu = game.add.sprite(0,0,"MainMenu");
	this.sign = game.add.sprite(0,-1000, "sign");
	game.physics.enable(this.sign, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor");
};

mainMenuState.prototype.update = function(){
	if(game.input.mousePointer.isDown){
		if (game.input.x >379 && game.input.x < 779 && game.input.y >1012 && game.input.y< 1173 ){
			game.state.start("Telescope");
		}
		else if((game.input.x >379 && game.input.x < 779 && game.input.y > 1239 && game.input.y < 1400)){

		}
		else if(game.input.x >379 && game.input.x < 779 && game.input.y > 1464 && game.input.y < 1625){
			
		}
	}

}