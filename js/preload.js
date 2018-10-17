let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");	
	game.load.image("goal", "assets/gunShadow.png");
	game.load.image("gun", "assets/gun.png");
	game.load.image("stock", "assets/stock.png");
	game.load.image("stock2", "assets/stock2.png");
	game.load.image("trigger", "assets/trigger.png");
	game.load.image("sight", "assets/sight.png");
	game.load.image("barrel", "assets/barrel.png");
	game.load.image("guard", "assets/guard.png");
	game.load.image("MainMenu", "assets/MainMenu.png");
	game.load.image("sign","assets/Sign.png" );
	game.load.image("gunBG", "assets/GunGame.png");
	game.load.image("scene","assets/SceneSelect.png");
	game.load.image("Paper", "assets/Paper.png");
	game.load.image("test", "assets/test.png");
	game.load.image("easelBlank", "assets/Easel.png");
	game.load.image("easel1", "assets/BrightonEasel.png");
	game.load.image("easel2", "assets/BiloxiEasel.png");
	game.load.image("easel3", "assets/BroadwayEasel.png")
	game.load.image("audienceFloor", "assets/AudienceBackground.png");
	game.load.bitmapFont("carrier_command", "assets/carrier_command.png", "assets/carrier_command.xml");
	game.load.image("LCurtain", "assets/NewCurtainLeft.png");
	game.load.image("RCurtain", "assets/NewCurtainRight.png");
	game.load.audio("gunBreak", "");
	game.load.audio("gunDrag", "");
	game.load.audio("gunSnap", "assets/sounds/gun_snap");
	game.load.audio("typing", "");
	game.load.audio("bat", "");
	game.load.audio("moan", "");
	game.load.image("end","assets/EndScreen.png");
	//help please
	//game.load.bitmapFont("Typewriter", "assets/carrier_command.png", "assets/carrier_command.xml");
};
preloadState.prototype.create = function(){
	game.state.start("Radio");
};

preloadState.prototype.update = function(){

};