let telescopeState  =function() {
	
};
telescopeState.prototype.create = function(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,"building");
	this.telescope = game.add.sprite(500,1000,"telescope");
	this.telescope.scale.setTo(1.55,1.55);
	game.physics.enable(this.telescope, Phaser.Physics.ARCADE);
	this.telescope.anchor.setTo(0.5, 0.5);
	//game.add(0,0,"telescope");
};

telescopeState.prototype.update = function(){
	if (game.input.mousePointer.isDown){
		this.telescope.x = game.input.x;
		this.telescope.y = game.input.y;
		if (this.telescope.y>1827){
			this.telescope.y = 1827;
		}
		
	}
	else{
	}
};
	
