let radioState =function() {
	this.score = 0;
};
radioState.prototype.create = function() {
	game.add.sprite(0,0, "Paper");
	
	this.prompt = game.add.bitmapText(100,100, 'Typewriter', 'This is not a drill I can\'t read');


	this.answer1 = game.add.bitmapText(200,200, 'Typewriter', 'Test', 72);
	this.answer1.inputEnabled = true;
	this.answer1.input.enableDrag();

};

radioState.prototype.update = function() {
	//this.text1.x = Math.floor(this.sprite.x + this.sprite.width/2);
	//this.text1.y = Math.floor(this.sprite.y + this.sprite.height / 2);
}