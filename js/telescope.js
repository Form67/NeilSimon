let telescopeState  =function() {
	this.gameProgress = 0;
	this.gameActive = false;
	this.gameTimer = 1;
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
};


telescopeState.prototype.update = function(){
	if(this.gameActive){
		if(this.telescope.x >= 450 && this.telescope.x<=600 && this.telescope.y >= 450 && this.telescope.y <= 600){
			gameTimer -= game.time.physicsElapsed;
		}
		else{
			gameTimer = 3;
		}
		if (game.input.mousePointer.isDown){
			this.telescope.x = game.input.x;
			this.telescope.y = game.input.y;
			if (this.telescope.y>1827){
				this.telescope.y = 1827;
			}
			console.log(this.telescope.x + "" + this.telescope.y);
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
	}

	
};
	
