let radioState =function() {

};
radioState.prototype.create = function() {
	game.add.sprite(0,0, "Paper");
	
	this.sprite = game.add.sprite(200,200, 'test');
	this.sprite.inputEnabled = true;
	this.sprite.input.enableDrag();

	let style = { font: "72px Arial", fill: "#ff0044", wordWrape: true, wordWrapWidth: this.sprite.width, align: "center", backgroundColor: "#ffff00" };

	this.text1 = new Text(radioState, 1000, 1000, "this is a test", style);
	//text1.anchor.set(0.5, 0.5);
	//let text2 = new Text(radioState, 10, 10, "this is a test2", 'bold 30pt Arial', 'blue');
};

radioState.prototype.update = function() {
	this.text1.x = Math.floor(this.sprite.x + this.sprite.width/2);
	this.text1.y = Math.floor(this.sprite.y + this.sprite.height / 2);
}