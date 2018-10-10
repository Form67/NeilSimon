let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");
	game.load.image("LCurtain", "assets/NewCurtainLeft.png");
	game.load.image("RCurtain", "assets/NewCurtainRight.png");
};
preloadState.prototype.create = function(){
	game.state.start("Telescope");
};
preloadState.prototype.update = function(){

};