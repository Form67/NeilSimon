let gunplayState = function(){
	this.score = 0;
};

let part1;
let part2;
let part3;
let part4;
let part5;
let part6;
let partGoal1 = new Phaser.Point(400, 400);
let partGoal2 = new Phaser.Point(432, 400);
let partGoal3 = new Phaser.Point(464, 400);
let partGoal4 = new Phaser.Point(400, 432);
let partGoal5 = new Phaser.Point(432, 432);
let partGoal6 = new Phaser.Point(464, 432);
let snapped1 = false;
let snapped2 = false;
let snapped3 = false;
let snapped4 = false;
let snapped5 = false;
let snapped6 = false;

gunplayState.prototype.create = function(){
	
	// top left part
	game.add.sprite(384, 384, "goal");
	

	
	part1 = game.add.sprite(game.world.centerX - 100, game.world.centerY - 100, 'part1');
	part1.inputEnabled = true;
	part1.anchor.x = 0.5;
	part1.anchor.y = 0.5;
	
	part2 = game.add.sprite(game.world.centerX , game.world.centerY - 100, 'part2');
	part2.inputEnabled = true;
	part2.anchor.x = 0.5;
	part2.anchor.y = 0.5;
	
	part3 = game.add.sprite(game.world.centerX + 100, game.world.centerY - 100, 'part3');
	part3.inputEnabled = true;
	part3.anchor.x = 0.5;
	part3.anchor.y = 0.5;
	
	part4 = game.add.sprite(game.world.centerX - 100, game.world.centerY, 'part4');
	part4.inputEnabled = true;
	part4.anchor.x = 0.5;
	part4.anchor.y = 0.5;
	
	part5 = game.add.sprite(game.world.centerX, game.world.centerY, 'part5');
	part5.inputEnabled = true;
	part5.anchor.x = 0.5;
	part5.anchor.y = 0.5;
	
	part6 = game.add.sprite(game.world.centerX + 100, game.world.centerY, 'part6');
	part6.inputEnabled = true;
	part6.anchor.x = 0.5;
	part6.anchor.y = 0.5;

};
gunplayState.prototype.update = function(){
	movePart(part1, snapped1);
	movePart(part2, snapped2);
	movePart(part3, snapped3);
	movePart(part4, snapped4);
	movePart(part5, snapped5);
	movePart(part6, snapped6);
	
	snapPart(part1, partGoal1, snapped1);
	snapPart(part2, partGoal2, snapped2);
	snapPart(part3, partGoal3, snapped3);
	snapPart(part4, partGoal4, snapped4);
	snapPart(part5, partGoal5, snapped5);
	snapPart(part6, partGoal6, snapped6);
	
	if(snapped1 && snapped2 && snapped3 && snapped4 && snapped5 && snapped6){
		console.log(" YOU WIN ");
	}
	
};

gunplayState.prototype.movePart = function(part, snapped){
	if(game.input.x <= (part.x + part.width/2) && game.input.x >= (part.x - part.width/2) &&
	 game.input.y <= (part.y + part.height/2) && game.input.y >= (part.y - part.height/2) && 
	 game.input.activePointer.leftButton.isDown && !snapped){
		console.log("x: " + part.x);
		console.log("y: " + part.y);
		part.x = game.input.x;
		part.y = game.input.y;
	}
}

gunplayState.prototype.snapPart = function(part, partGoal, snapped){
	if(!snapped && part.x <= partGoal.x +part.width/2 && part.x >= partGoal.x -part.width/2 &&
   part.y <= partGoal.y +part.height/2 && part.y >= partGoal.y -part.height/2){
		part.x = partGoal.x;
		part.y = partGoal.y;
		snapped = true;
		console.log("snapped");
	}
}