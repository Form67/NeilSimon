let mainMenuState =function() {
	this.gameTimer = 7;
	this.mode = 0;
};
mainMenuState.prototype.create = function(){
	this.menu = game.add.sprite(0,0,"MainMenu");
	this.sign = game.add.sprite(0,-1000, "sign");
	game.physics.enable(this.sign, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor");
	this.board = game.add.sprite(200,1800, "easelBlank");
	this.board.scale.setTo(2,2);
	this.textshow = false;
};

mainMenuState.prototype.update = function(){
	if(game.input.mousePointer.isDown &&this.mode === 0){
		if (game.input.x >379 && game.input.x < 779 && game.input.y >1012 && game.input.y< 1173 ){
			this.mode = 1;
		}
		else if((game.input.x >379 && game.input.x < 779 && game.input.y > 1239 && game.input.y < 1400)){
			game.state.start("sceneSelect");
		}
		else if(game.input.x >379 && game.input.x < 779 && game.input.y > 1464 && game.input.y < 1625){
			
		}
	}
	if(this.mode === 1){
		this.gameTimer -= game.time.physicsElapsed;
		this.sign.body.velocity.y = -300;
		if(this.gameTimer <=6 && this.textshow=== false){
		this.textshow = true;
		console.log("hi");
		let text = game.add.text(150, 500, "I wanted to make a whole audience fall onto the floor, writhing and laughing so hard that some of them pass out.\n-Neil Simon", {font: "72px itc-american-typewriter", fill: "#ffffff", align: "center", wordWrap: true, wordWrapWidth: 900 });
		}
		if(this.gameTimer <0){
			game.state.start("Telescope");
		}
	}
}