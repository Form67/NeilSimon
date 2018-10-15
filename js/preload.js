let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");
	game.load.image("part", "assets/32red.png");
	game.load.image("goal", "assets/32green.png");
	
	game.load.image("Paper", "assets/Paper.png");
	game.load.image("test", "assets/test.png");
	game.load.bitmapFont("carrier_command", "assets/carrier_command.png", "assets/carrier_command.xml");
	game.load.image("LCurtain", "assets/NewCurtainLeft.png");
	game.load.image("RCurtain", "assets/NewCurtainRight.png");
	//help please
	//game.load.bitmapFont("Typewriter", "assets/carrier_command.png", "assets/carrier_command.xml");
};
preloadState.prototype.create = function(){
	game.state.start("Gunplay");
};
preloadState.prototype.update = function(){

};