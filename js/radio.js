let radioState =function() {
	this.gameProgress = 0;
	this.curtainsWait = 5;
	this.score = 0;
};

radioState.prototype.create = function() {
	game.add.sprite(0,0, "Paper");
	
	this.promptz = game.add.text(100,100,'This is not a drill I can\'t read', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center", wordWrap: true, wordWrapWidth: 1000 });
	this.promptz.inputEnabled = true;
	//this.prompt.input.enableDrag();
	//this.prompt.input.pixelPerfectClick = true;

	//this.answer1.inputEnabled = true;
	//this.answer1.input.enableDrag();
	
	this.prompts = game.add.group();
	this.count = 0;
	this.answers = game.add.group();
	this.prompts.inputEnableChildren = true;


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
		let test = game.add.text(x, y, 'testyboi', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center" });
		this.prompts.add(test);
	}
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
	this.prompts.onChildInputDown.add(this.removeText, this);
	if(this.count === 1) {
		console.log("this is happening");
		this.createGroup2();
	}
};
radioState.prototype.createGroup2 = function() {
	for(let i = 0; i < 4; i++) {
		let x = 0;
		let y = 0;
		if(i === 0) {
			x = 200;
			y = 700;
		}
		if(i === 1) {
			x = 600;
			y = 700;
		}
		if(i === 2) {
			x = 200;
			y = 900;
		}
		if(i === 3) {
			x = 600;
			y = 900;
		}
		let test = game.add.text(x, y, 'testyboi', {font: "72px itc-american-typewriter", fill: "#ff0044", align: "center" });
		this.prompts.add(test);
	}
	this.prompts.inputEnabled = true;
};
radioState.prototype.removeText = function(prompt, pointer) {
	console.log(prompt.x);
	console.log(prompt.y);
	console.log(pointer.x);
	console.log(pointer.y);
	let temp = 0;
	for(let i = 0; i < this.prompts.length;i++) {
		if(prompt === this.prompts.children[i])
			temp = i;
	}
	this.promptz.text += " " + prompt.text;
	this.prompts.destroy(destroyChildren = true);
	console.log("this is happening");
	if(this.count === 0) {
		if(temp === 0)
			this.score += 5;
		if(temp === 1)
			this.score += 2;
		if(temp === 2)
			this.score += 0;
		if(temp === 3)
			this.score += 10;
	}
	if(this.count === 1) {
		if(temp === 0)
			this.score += 2;
		if(temp === 1)
			this.score += 10;
		if(temp === 2)
			this.score += 5;
		if(temp === 3)
			this.score += 0;
	}
	if(this.count === 2) {
		if(temp === 0)
			this.score += 10;
		if(temp === 1)
			this.score += 5;
		if(temp === 2)
			this.score += 0;
		if(temp === 3)
			this.score += 2;
	}
	if(this.count === 3) {
		if(temp === 0)
			this.score += 0;
		if(temp === 1)
			this.score += 2;
		if(temp === 2)
			this.score += 10;
		if(temp === 3)
			this.score += 5;
	}
	console.log(this.score);
	this.count++;
};
