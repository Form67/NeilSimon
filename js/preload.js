let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");
	game.load.image("Paper", "assets/Paper.png");
	//game.load.image("test", "assets/person.png");
	game.load.image("LCurtain", "assets/NewCurtainLeft.png");
	game.load.image("RCurtain", "assets/NewCurtainRight.png");
	//help please
	//game.load.bitmapFont("Typewriter", "assets/carrier_command.png", "assets/carrier_command.xml");
};
preloadState.prototype.create = function(){
	game.state.start("Radio");
};
preloadState.prototype.update = function(){

};