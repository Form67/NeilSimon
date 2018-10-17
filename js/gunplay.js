let gunplayState = function(){
	this.score = 0;
	this.gameProgress = 0;
	this.curtainsWait = 5;
};

let gun;			// 563x97
let gunShadow;// 563x97
let stock;		// 145x74
let stock2;		// 275x31
let barrel;		// 82x29
let sight;		// 258x18
let trigger;	// 121x19
let guard;		// 59x17	
let draggedPart;
let bg;
let snapFx;
let breakFx;
let dragFx;

let stockGoal = new Phaser.Point(357, 780);
let stock2Goal = new Phaser.Point(566, 755);
let barrelGoal = new Phaser.Point(799, 745);
let sightGoal = new Phaser.Point(571, 732);
let triggerGoal = new Phaser.Point(499, 775);
let guardGoal = new Phaser.Point(732, 748);			

let intro = true;
let dragging = false;

gunplayState.prototype.create = function(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	bg = game.add.sprite(0, 0, "gunBG");
	bg.scale.setTo(4,3);
	
	// gun
	gun = game.add.sprite(game.world.centerX - 280, game.world.centerY - 400, "gun");
	game.physics.arcade.enable(gun);
	
	this.Lcurtain = game.add.sprite(0,0,"LCurtain");
	game.physics.enable(this.Lcurtain, Phaser.Physics.ARCADE);
	this.Rcurtain = game.add.sprite(0,0,"RCurtain");
	game.physics.enable(this.Rcurtain, Phaser.Physics.ARCADE);
	this.audienceFloor = game.add.sprite(0,0,"audienceFloor")
	
	snapFx = game.add.audio("gunSnap");
	breakFx = game.add.audio("gunBreak");
	dragFx = game.add.audio("gunDrag");
};
gunplayState.prototype.update = function(){
	
	if(intro && this.gameProgress ===2){
		gun.body.gravity.y = 250;
		if(gun.y >= 1700){
			gun.kill();
			this.spawnParts();
			intro = false;
			breakFx.play();
		}
	}
	else if(!intro && this.gameProgress === 2){
		if(!game.input.activePointer.leftButton.isDown){
			dragging = false;
		}
		else if(game.input.activePointer.leftButton.isDown && dragging){
			if(!draggedPart.snapped){
				draggedPart.x = game.input.x;
				draggedPart.y = game.input.y;
			}
		}
		if(!dragging){
			this.movePart(stock);
			this.movePart(stock2);
			this.movePart(barrel);
			this.movePart(sight);
			this.movePart(trigger);
			this.movePart(guard);
			
			this.snapPart(stock, stockGoal);
			this.snapPart(stock2, stock2Goal);
			this.snapPart(barrel, barrelGoal);
			this.snapPart(sight, sightGoal);
			this.snapPart(trigger, triggerGoal);
			this.snapPart(guard, guardGoal);
		}
		
		
		
		if(stock.snapped && stock2.snapped && barrel.snapped && sight.snapped && trigger.snapped && guard.snapped){
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
			game.state.start("Radio");
		}
	}
};

gunplayState.prototype.movePart = function(part){
	if(game.input.x <= (part.x + part.width/2) && game.input.x >= (part.x - part.width/2) &&
	 game.input.y <= (part.y + part.height/2) && game.input.y >= (part.y - part.height/2) && 
	 game.input.y <= 1700 && game.input.activePointer.leftButton.isDown && !part.snapped){

		part.x = game.input.x;
		part.y = game.input.y;
		dragging = true;
		draggedPart = part;
		dragFx.play();
	}
}

gunplayState.prototype.snapPart = function(part, partGoal){
	if(!part.snapped && part.x <= partGoal.x +part.width/2 && part.x >= partGoal.x -part.width/2 &&
   part.y <= partGoal.y +part.height/2 && part.y >= partGoal.y -part.height/2){
		
		part.x = partGoal.x;
		part.y = partGoal.y;
		part.snapped = true;
		snapFx.play();
	}
}

gunplayState.prototype.spawnParts = function(){
	
	gunShadow = game.add.sprite(game.world.centerX - 280, game.world.centerY - 500, "goal");

	
	stock = game.add.sprite(game.world.centerX + 400, 1700, 'stock');
	stock.inputEnabled = true;
	stock.anchor.x = 0.5;
	stock.anchor.y = 0.5;
	stock.snapped = false;
	
	stock2 = game.add.sprite(game.world.centerX , 1700, 'stock2');
	stock2.inputEnabled = true;
	stock2.anchor.x = 0.5;
	stock2.anchor.y = 0.5;
	stock2.snapped = false;

	
	barrel = game.add.sprite(game.world.centerX - 100, 1700, 'barrel');
	barrel.inputEnabled = true;
	barrel.anchor.x = 0.5;
	barrel.anchor.y = 0.5;
	barrel.snapped = false;
	
	sight = game.add.sprite(game.world.centerX - 500, 1700, 'sight');
	sight.inputEnabled = true;
	sight.anchor.x = 0.5;
	sight.anchor.y = 0.5;
	sight.snapped = false;
	
	trigger = game.add.sprite(game.world.centerX + 500, 1700, 'trigger');
	trigger.inputEnabled = true;
	trigger.anchor.x = 0.5;
	trigger.anchor.y = 0.5;
	trigger.snapped = false;
	
	guard = game.add.sprite(game.world.centerX - 400, 1700, 'guard');
	guard.inputEnabled = true;
	guard.anchor.x = 0.5;
	guard.anchor.y = 0.5;
	guard.snapped = false;
	
}