let radioState =function() {
	this.gameProgress = 0;
	this.curtainsWait = 5;
	this.score = 0;
};

radioState.prototype.create = function() {
	game.add.sprite(0,0, "Paper");
	
	this.promptz = game.add.text(100,100,'', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center", wordWrap: true, wordWrapWidth: 1000 });
	this.promptz.inputEnabled = true;
	//this.prompt.input.enableDrag();
	//this.prompt.input.pixelPerfectClick = true;

	//this.answer1.inputEnabled = true;
	//this.answer1.input.enableDrag();
	
	this.prompts = game.add.group();
	this.count = 0;
	this.answers = game.add.group();
	this.prompts.inputEnableChildren = true;
	
	let typeFx = game.add.audio("typing");


	for(let i = 0; i < 4; i++) {
		let x = 0;
		let y = 0;
		if(i === 0) {
			x = 200;
			y = 300;
		}
		if(i === 1) {
			x = 600;
			y = 300;
		}
		if(i === 2) {
			x = 200;
			y = 500;
		}
		if(i === 3) {
			x = 600;
			y = 500;
		}
		let test = game.add.text(x, y, 'testyboi', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center", wordWrap: true, wordWrapWidth: 500 });
		this.prompts.add(test);
	}
	this.createGroup();
	this.prompts.inputEnabled = true;
	this.Lcurtain = game.add.sprite(0,0,"LCurtain");
	game.physics.enable(this.Lcurtain, Phaser.Physics.ARCADE);
	this.Rcurtain = game.add.sprite(0,0,"RCurtain");
	game.physics.enable(this.Rcurtain, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor")
	this.board = game.add.sprite(200,1800, "easel3");
	this.board.scale.setTo(2,2);
};


radioState.prototype.update = function() {
	if (this.gameProgress === 2){
		//this.text1.x = Math.floor(this.sprite.x + this.sprite.width/2);
		//this.text1.y = Math.floor(this.sprite.y + this.sprite.height / 2);
		//game.input.onDown.addOnce(this.removeText, this);
		this.prompts.onChildInputDown.add(this.removeText, this);
		//if(this.count === 1) {
			//createGroup2();
		//}
		//this.prompts.onChildInputDown.add(this.removeText, this);
		
	}
	else if (this.gameProgress ===0){
		this.Lcurtain.body.velocity.x = -400;
		this.Rcurtain.body.velocity.x = 400;
		this.gameProgress =1;
	}
	else if (this.gameProgress ===1){
		if(+this.Rcurtain.body.position.x >= +650.0){
			this.Lcurtain.body.velocity.x = 0;
			this.Rcurtain.body.velocity.x = 0;
			this.gameProgress =2;
			this.gameActive = true;
		}
	}
	else if (this.gameProgress ===3){
		this.Lcurtain = game.add.sprite(-650,0,"LCurtain");
		game.physics.enable(this.Lcurtain, Phaser.Physics.ARCADE);
		this.Rcurtain = game.add.sprite(650,0,"RCurtain");
		game.physics.enable(this.Rcurtain, Phaser.Physics.ARCADE);
		this.Lcurtain.body.velocity.x = 400;
		this.Rcurtain.body.velocity.x = -400;
		this.gameProgress =4;
	}
	else if(this.gameProgress ===4 && this.Rcurtain.body.position.x <= 0){
			this.Lcurtain.body.velocity.x = 0;
			this.Rcurtain.body.velocity.x = 0;
			this.gameProgress = 5;
	}
	else if(this.gameProgress ===5){
		this.curtainsWait -= game.time.physicsElapsed;
		if(this.curtainsWait <=0){
			game.state.start("end");
		}
	}

};
radioState.prototype.createGroup = function() {
	for(let i = 0; i < 4; i++) {
		let x = 0;
		let y = 0;
		let tempText = "";
		let tempPrompt = "";
		if(i === 0) {
			x = 100;
			y = 200 * (this.count + 1.5) + 50;
			if(this.count === 0)
			tempText = "Brighton Beach";
			if(this.count === 1)
			tempText = "Creativity";
			if(this.count === 2)
			tempText = "Mississippi";
			if(this.count === 3)
			tempText = "Your life experience";
		}
		if(i === 1) {
			tempPrompt = "A writer without -- is like a metaphor without something to compare itself to.";
			x = 600;
			y = 200 * (this.count + 1.5) + 50;
			if(this.count === 0)
			tempText = "New York";
			if(this.count === 1)
			tempText = "Wits";
			if(this.count === 2)
			tempText = "Biloxi";
			if(this.count === 3)
			tempText = "Your unique writing style";
		}
		if(i === 2) {
			x = 100;
			y = 200 * (this.count + 1.5) + 250;
			if(this.count === 0)
			tempText = "America";
			if(this.count === 1)
			tempText = "Confidence";
			if(this.count === 2)
			tempText = "The Southern US";
			if(this.count === 3)
			tempText = "All of your best jokes";
		}
		if(i === 3) {
			x = 600;
			y = 200 * (this.count + 1.5) + 250;
			if(this.count === 0)
			tempText = "Los Angeles";
			if(this.count === 1)
			tempText = "Self-Assurance";
			if(this.count === 2)
			tempText = "New York";
			if(this.count === 3)
			tempText = "All the moments of your life";

		}
		
		//let test = game.add.text(x, y, 'testyboi', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center" });
		this.prompts.children[i].x = x;
		if(this.count === 3)
			y += 200;
		this.prompts.children[i].y = y;
		this.prompts.children[i].text = tempText;
	}
	
	if(this.count === 0)
		tempPrompt = "I grew up in -";
	if(this.count === 1)
		tempPrompt = "A writer without confidence is like a metaphor without -";
	if(this.count === 2)
		tempPrompt = "I went to boot camp in -";
	if(this.count === 3)
		tempPrompt = "Everyone thinks they can write a play; you just write down what happened to you. But the art of it is drawing from -";
	if(this.count >= 4) {
		gameProgress = 3;
		this.prompts.destroy();
		return;
	}
	this.promptz.text += tempPrompt;

	this.prompts.inputEnabled = true;
};
radioState.prototype.removeText = function(prompt, pointer) {
	typeFx.play();
	let temp = 0;
	for(let i = 0; i < this.prompts.length;i++) {
		if(prompt === this.prompts.children[i])
			temp = i;
	}
	
	this.promptz.text += " " + prompt.text + "\n";

	if(this.count === 0) {
		if(temp === 0)
			this.score += 10;
		if(temp === 1)
			this.score += 0;
		if(temp === 2)
			this.score += 5;
		if(temp === 3)
			this.score += 5;
	}
	if(this.count === 1) {
		if(temp === 0)
			this.score += 5;
		if(temp === 1)
			this.score += 1;
		if(temp === 2)
			this.score += 10;
		if(temp === 3)
			this.score += 0;
	}
	if(this.count === 2) {
		if(temp === 0)
			this.score += 1;
		if(temp === 1)
			this.score += 10;
		if(temp === 2)
			this.score += 1;
		if(temp === 3)
			this.score += 1;
	}
	if(this.count === 3) {
		if(temp === 0)
			this.score += 0;
		if(temp === 1)
			this.score += 5;
		if(temp === 2)
			this.score += 0;
		if(temp === 3)
			this.score += 10;
		//SAM THIS IS WHERE I NEED THE WAIT =================================================================
		this.gameProgress = 3;

		
	}
	console.log(this.score);
	this.count++;
	
	this.createGroup();
	
};
