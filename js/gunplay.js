let gunplayState = function(){
	this.score = 0;
};

let part;
let partGoal = new Phaser.Point(400, 400);
let snapped = false;

gunplayState.prototype.create = function(){
	
	game.add.sprite(384, 384, "goal");
	

	
	part = game.add.sprite(game.world.centerX, game.world.centerY, 'part');
	part.inputEnabled = true;
	part.anchor.x = 0.5;
	part.anchor.y = 0.5;

};
gunplayState.prototype.update = function(){
	if(game.input.x <= (part.x + part.width/2) && game.input.x >= (part.x - part.width/2) &&
	 game.input.y <= (part.y + part.height/2) && game.input.y >= (part.y - part.height/2) && 
	 game.input.activePointer.leftButton.isDown && !snapped){
		console.log("x: " + part.x);
		console.log("y: " + part.y);
		part.x = game.input.x;
		part.y = game.input.y;
	}
	if(!snapped && part.x <= partGoal.x +part.width/2 && part.x >= partGoal.x -part.width/2 &&
   part.y <= partGoal.y +part.height/2 && part.y >= partGoal.y -part.height/2){
		part.x = partGoal.x;
		part.y = partGoal.y;
		snapped = true;
		console.log("snapped");
	}
};
