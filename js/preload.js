let preloadState =function() {
	
};

preloadState.prototype.preload = function(){
	game.load.image("telescope", "assets/TelescopeOverlay.png");
	game.load.image("building", "assets/BuildingTest.png");
};
preloadState.prototype.create = function(){
	game.state.start("Telescope");
};
preloadState.prototype.update = function(){

};