let telescopeState  =function() {
	
};
telescopeState.prototype.create = function(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,"building");
	this.telescope = game.add.sprite(0,0,"telescope");
	game.physics.enable(this.telescope, Phaser.Physics.ARCADE);
	this.telescope.anchor.setTo(0.5, 0.5);
	//game.add(0,0,"telescope");
};

telescopeState.prototype.update = function(){
	if (game.input.mousePointer.isDown){
		game.physics.arcade.moveToPointer(this.telescope,100000);
		
	}
	else{
		this.telescope.body.velocity.setTo(0,0);
	}
};
	
