let gunplayState = function(){
	this.score = 0;
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

let stockGoal = new Phaser.Point(357, 1228);
let stock2Goal = new Phaser.Point(568, 1199);
let barrelGoal = new Phaser.Point(803, 1187);
let sightGoal = new Phaser.Point(571, 1175);
let triggerGoal = new Phaser.Point(501, 1221);
let guardGoal = new Phaser.Point(739, 1193);			

let intro = true;
let dragging = false;

gunplayState.prototype.create = function(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// gun
	gun = game.add.sprite(game.world.centerX - 280, game.world.centerY - 48, "gun");
	game.physics.arcade.enable(gun);
	gun.body.gravity.y = 250;
	
};
gunplayState.prototype.update = function(){
	
	if(intro){
		if(gun.y >= 1827){
			gun.kill();
			this.spawnParts();
			intro = false;
		}
	}
	else{
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
		}
		
		this.snapPart(stock, stockGoal);
		this.snapPart(stock2, stock2Goal);
		this.snapPart(barrel, barrelGoal);
		this.snapPart(sight, sightGoal);
		this.snapPart(trigger, triggerGoal);
		this.snapPart(guard, guardGoal);
		
		
		if(stock.snapped && stock2.snapped && barrel.snapped && sight.snapped && trigger.snapped && guard.snapped){
			//console.log(" YOU WIN ");
		}
	}
};

gunplayState.prototype.movePart = function(part){
	if(game.input.x <= (part.x + part.width/2) && game.input.x >= (part.x - part.width/2) &&
	 game.input.y <= (part.y + part.height/2) && game.input.y >= (part.y - part.height/2) && 
	 game.input.y <= 1827 && game.input.activePointer.leftButton.isDown && !part.snapped){
		console.log("x: " + part.x);
		console.log("y: " + part.y);
		part.x = game.input.x;
		part.y = game.input.y;
		dragging = true;
		draggedPart = part;
	}
}

gunplayState.prototype.snapPart = function(part, partGoal){
	if(!part.snapped && part.x <= partGoal.x +part.width/2 && part.x >= partGoal.x -part.width/2 &&
   part.y <= partGoal.y +part.height/2 && part.y >= partGoal.y -part.height/2){
		part.x = partGoal.x;
		part.y = partGoal.y;
		part.snapped = true;
		console.log("snapped");
	}
}

gunplayState.prototype.spawnParts = function(){
	
	gunShadow = game.add.sprite(game.world.centerX - 280, game.world.centerY - 48, "goal");

	
	stock = game.add.sprite(game.world.centerX + 400, 1827, 'stock');
	stock.inputEnabled = true;
	stock.anchor.x = 0.5;
	stock.anchor.y = 0.5;
	stock.snapped = false;
	
	stock2 = game.add.sprite(game.world.centerX , 1827, 'stock2');
	stock2.inputEnabled = true;
	stock2.anchor.x = 0.5;
	stock2.anchor.y = 0.5;
	stock2.snapped = false;

	
	barrel = game.add.sprite(game.world.centerX - 100, 1827, 'barrel');
	barrel.inputEnabled = true;
	barrel.anchor.x = 0.5;
	barrel.anchor.y = 0.5;
	barrel.snapped = false;
	
	sight = game.add.sprite(game.world.centerX - 500, 1827, 'sight');
	sight.inputEnabled = true;
	sight.anchor.x = 0.5;
	sight.anchor.y = 0.5;
	sight.snapped = false;
	
	trigger = game.add.sprite(game.world.centerX + 500, 1827, 'trigger');
	trigger.inputEnabled = true;
	trigger.anchor.x = 0.5;
	trigger.anchor.y = 0.5;
	trigger.snapped = false;
	
	guard = game.add.sprite(game.world.centerX - 400, 1827, 'guard');
	guard.inputEnabled = true;
	guard.anchor.x = 0.5;
	guard.anchor.y = 0.5;
	guard.snapped = false;
	
}