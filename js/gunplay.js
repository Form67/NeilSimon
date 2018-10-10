let gunplayState = function(){
	this.score = 0;
};
gunplayState.prototype.create = function(){
	
	game.add.sprite(0,0,"sky");


	this.parts = game.add.group();


	let part = this.parts.create(400,400,"part");
	
	let offsetX = 0;
	let offsetY = 0;

};
gunplayState.prototype.update = function(){
/* 	if(parts.input.pointerOver() && game.input.activePointer.leftButton.isDown){
		offsetX = game.input.x - part.body.x;
		offsetY = game.input.y - part.body.y;
		part.x = game.input.x - offsetX;
		part.y = game.input.y - offsetY;
	}
	 */
};
