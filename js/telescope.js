let telescopeState  =function() {
	this.gameProgress = 0;
	this.gameActive = false;
	this.gameTimer = 2.7;
	this.curtainsWait = 5;
};

telescopeState.prototype.create = function(){
	this.gameActive = false;
	this.gameProgress = 0;
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,"building");
	this.telescope = game.add.sprite(500,1000,"telescope");
	this.telescope.scale.setTo(1.55,1.55);
	game.physics.enable(this.telescope, Phaser.Physics.ARCADE);
	this.telescope.anchor.setTo(0.5, 0.5);
	this.Lcurtain = game.add.sprite(0,0,"LCurtain");
	game.physics.enable(this.Lcurtain, Phaser.Physics.ARCADE);
	this.Rcurtain = game.add.sprite(0,0,"RCurtain");
	game.physics.enable(this.Rcurtain, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor")
	this.board = game.add.sprite(200,1800, "easel1");
	this.board.scale.setTo(2,2);
	
	let batFx = game.add.audio("bat");
	let girlFx = game.add.audio("moan");
	// put these where you want souond to play
	// batFx.play();
	// girlFx.play();
};


telescopeState.prototype.update = function(){
	if(this.gameActive){
		if(this.telescope.x >= 400 && this.telescope.x<=700 && this.telescope.y >= 400 && this.telescope.y <= 700){
			gameTimer -= game.time.physicsElapsed;
		}
		else{
			gameTimer = 2.7;
		}
		if (game.input.mousePointer.isDown){
			this.telescope.x = game.input.x;
			this.telescope.y = game.input.y;
			if (this.telescope.y>1827){
				this.telescope.y = 1827;
			}
		}
		if(gameTimer <= 0){
			this.gameActive = false;
			this.gameProgress = 3;
		}
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
		this.Lcurtain.body.velocity.x = 400;
		this.Rcurtain.body.velocity.x = -400;
		this.gameProgress =4;
	}
	else if(this.gameProgress ===4 && this.Rcurtain.body.position.x <= 0){
			this.Lcurtain.body.velocity.x = 0;
			this.Rcurtain.body.velocity.x = 0;
			this.gameProgress =5;
			
	}
	else if(this.gameProgress ===5){
		this.curtainsWait -= game.time.physicsElapsed;
		if(this.curtainsWait <=0){
			game.state.start("Gunplay");
		}

	}

	
};
	
